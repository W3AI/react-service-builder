import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

class ProductBuilder extends Component {
    render () {
        return (
            <Aux>
                <div>Product</div>          
                <div>Build Controls</div>   
            </Aux>
        );
    }
}

export default ProductBuilder;