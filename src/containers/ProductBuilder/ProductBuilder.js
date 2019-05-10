import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Product from '../../components/Product/Product';

class ProductBuilder extends Component {
    render () {
        return (
            <Aux>
                <Product />         
                <div>Build Controls</div>   
            </Aux>
        );
    }
}

export default ProductBuilder;