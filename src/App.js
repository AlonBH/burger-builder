import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// import Importer from './components/Importer/Importer';
// import Select from './components/Importer/Select/Select';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
        // <Importer />
        // <Select />
    );
  }
}

export default App;
