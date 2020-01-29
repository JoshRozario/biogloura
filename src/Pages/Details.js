import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import '../App.css'
import { ButtonContainer } from '../Components/Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                const{id,company,img,info,price,title,inCart} =value.detailProduct;
                return (
                    <div className ="container">
                        <div className = "row justify-content-center">
                            {/* Product image*/}
                            <div className = "col-md-4 align-self-center">
                                <img src = {img} className = "img-fluid" alt = "product"/>
                            </div>
                            
                            {/* Title */}
                            <div className = "col-md-5">
                                <h1>{title}</h1>
                                <h2>Model : {title}</h2>
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
                                    <a href="/products" className="butn-pink">Back To Products</a>
                                    <strong> </strong>
                                    <ButtonContainer
                                    disabled = {inCart ? true:false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                    }}
                                    >
                                        {inCart ? "inCart" : "Add To Cart"}
                                    </ButtonContainer>
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
