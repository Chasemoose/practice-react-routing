import React from 'react';
import products from './../src/products.json';
import Product from '../src/components/Product';
import {Route, useParams } from 'react-router-dom'


const Shop = ({ list }) => {
    return list.map(p => <Product key={p.id} {...p}/>)
}

const CategoryPage = () => {
    const {category} = useParams()

    const list = products.filter(p => category.toLowerCase() === p.category.toLowerCase())

    if(list.length === 0) {
        return <p>Podana kategoria nie istnieje!</p>
    }

    return <Shop list={list} />
}

const Task03 = () => {
    return (
        <>
            <h1>Task03</h1>

            <Route exact path="/task03">
                <Shop list={products} />
            </Route>

            <Route path="/task03/:category">
                <CategoryPage/>
            </Route>
        </>
    );
}

export default Task03;

