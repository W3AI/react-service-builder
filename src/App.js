import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ProductBuilder from './containers/ProductBuilder/ProductBuilder';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
             <ProductBuilder />
          </Layout>
      </div>
    );
  }
}

export default App;