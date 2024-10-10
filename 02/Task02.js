import React from 'react';
import {Route, useParams} from 'react-router-dom'
import products from './../src/products.json'

const Product = ({name, price, category, description}) => {
    return (
        <article>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
        </article>
    )
}

const ProductPage = () => {
    const {id} = useParams()
    const [product = null] = products.filter(p => p.id === Number(id))
    
    return (
        <Product {...product} />
    )
}


const Task02 = () => {
    // const {id} = useParams()

    // const [product = null] = products.filter(p => p.id === id)


    return (
        <>
            <h1>Task02</h1>
            <Route path="/task02/product-:id">
                <ProductPage/>
            </Route>
        </>
    );
}

export default Task02;

