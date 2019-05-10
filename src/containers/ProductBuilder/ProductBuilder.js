import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Product from '../../components/Product/Product';
import BuildControls from '../../components/Product/BuildControls/BuildControls';

class ProductBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,

        }
    }

    render () {
        return (
            <Aux>
                <Product ingredients={this.state.ingredients} />         
                <BuildControls />
            </Aux>
        );
    }
}

export default ProductBuilder;