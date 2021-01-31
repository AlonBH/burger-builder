import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  cheese: 0.4,
  bacon: 0.7,
  salad: 0.5,
  meat: 1.3
}

class BurgerBuilder extends Component{

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios.get('https://react-my-burger-dbce2.firebaseio.com/ingredients.json')
    .then(response => {
      this.setState({ingredients : response.data});
    }).catch(error => this.setState({error: true}));
  }

  updatePurchaseState (ingredients) {
    const ingredientsAmount = Object.values(ingredients)
      .reduce((sum, value) => sum+=value, 0);
    
    this.setState({purchasable: ingredientsAmount > 0});
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice : newPrice, ingredients:updatedIngredients});

    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] <= 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type]--;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({totalPrice : newPrice, ingredients:updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }
  
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
    }

    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`
    });
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

    if(this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved ={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}/>
        </Aux>
      );

      orderSummary = <OrderSummary 
                          ingredients={this.state.ingredients} 
                          price={this.state.totalPrice}
                          purchaseContinued={this.purchaseContinueHandler}
                          purchaseCancelled={this.purchaseCancelHandler}/>
    }

    if(this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger} 
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);