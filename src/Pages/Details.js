import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import '../App.css'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                const{id,company,img,info,price,title,inCart} =value.detailProduct;
                return (
                    <div className ="container">
                        {/* Title */}
                        <div className = "col-10 mx-auto text-center text-slanted">
                            <h1>{title}</h1>
                        </div>
                        {/* Product image*/}
                        <div className = "col-10 mx-auto col-md-6 my-3">
                            <img src = {img} className = "img-fluid" alt = "product"/>
                        </div>
                        {/*Product Text*/}
                        <div className = "col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model : {title}</h2>
                            <h4 className = "text-title text-uppercase text-muted mt-3 mb-2">
                                made by : <span> 
                                    {company}
                                </span>
                            </h4>
                            <h4>
                                <strong>
                                    price : <span>$</span>
                                    {price}
                                </strong>
                            </h4>
                            <p className = "font-weight-bold mt-3 mb-0">
                                Product Details:
                            </p>
                            <p className = "text-muted lead">{info}</p>
                        {/* Buttons */}
                            <div>
                                <a href="/" className="butn-pink">Back to Product</a>
                                <p></p>
                                <div className = "butn-green" 
                                disabled = {inCart ? true:false}
                                onClick={()=>{
                                    value.addToCart(id);
                                }}
                                >
                                    {inCart ? "inCart" : "add to cart"}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}
