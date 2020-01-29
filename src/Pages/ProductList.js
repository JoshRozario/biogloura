import React, { Component } from 'react';
import Title from '../Components/Title';
import Product from "./Product"
import {storeProducts} from "../data";
import {ProductConsumer} from "../context";



export default class Products extends Component {

    render() {
        return(
            <React.Fragment>
                <div className ="container">
                <Title name = "Our" title ="Products"/>
                    <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map( product =>{
                                        return <Product key = {product.id} product = {product}/>
                                    })
                                }}
                            </ProductConsumer>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

