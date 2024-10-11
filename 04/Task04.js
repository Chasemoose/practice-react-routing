import React from 'react';
import { Route } from 'react-router-dom'

import Shop from './../src/components/Shop'
import products from './../src/products.json'

const Task04 = () => {
    return (
        <>
            <h1>Task04</h1>
            <Route path="/Task04/price-asc">
                <Shop list={[...products].sort((a,b) => a.price - b.price)} />
            </Route>

            <Route path="/Task04/price-desc">
                <Shop list={[...products].sort((a,b) => b.price - a.price)} />
            </Route>
        </>
    );
}

export default Task04;

