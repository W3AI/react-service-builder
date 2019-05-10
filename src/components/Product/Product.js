import React from 'react';

import classes from './Product.module.css';
import ProductIngredient from './ProductIngredient/ProductIngredient';

const product = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <ProductIngredient key={igKey + i} type={igKey} />
            });
        });
    return (
        <div className={classes.Product}>
            <ProductIngredient type="bread-top" />
            {transformedIngredients}
            <ProductIngredient type="bread-bottom" />
        </div>
    );
};


export default product;