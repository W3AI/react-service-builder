import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ProductBuilder from './containers/ProductBuilder/ProductBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
             <ProductBuilder />
             <Checkout />
          </Layout>
      </div>
    );
  }
}

export default App;