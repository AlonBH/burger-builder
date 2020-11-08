import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(ingredientKey => (
      <li key={ingredientKey}>
        <span style={{textTransform: 'capitalize'}}>
          {ingredientKey}
        </span> : {this.props.ingredients[ingredientKey]}
      </li>
    ));

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
      </Aux>
    );
  }
};

export default OrderSummary;