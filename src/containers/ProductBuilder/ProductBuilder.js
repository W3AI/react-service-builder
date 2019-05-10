import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Product from '../../components/Product/Product';

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
                <div>Build Controls</div>   
            </Aux>
        );
    }
}

export default ProductBuilder;