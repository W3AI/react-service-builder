import React from 'react';

import classes from './Product.module.css';
import ProductIngredient from './ProductIngredient/ProductIngredient';

const product = (props) => {
    return (
        <div className={classes.Product}>
            <ProductIngredient type="bread-top" />
            <ProductIngredient type="cheese" />
            <ProductIngredient type="meat" />
            <ProductIngredient type="bread-bottom" />
        </div>
    );
};


export default product;