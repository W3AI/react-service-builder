import React from 'react';

import classes from './Product.module.css';
import ProductIngredient from './ProductIngredient/ProductIngredient';

const product = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <ProductIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    // console.log(transformedIngredients);
    return (
        <div className={classes.Product}>
            <ProductIngredient type="bread-top" />
            {transformedIngredients}
            <ProductIngredient type="bread-bottom" />
        </div>
    );
};


export default product;