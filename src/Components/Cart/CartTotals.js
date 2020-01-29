import React from 'react';
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
export default function CartTotals({value, history}) {
    const{cartSubTotal, cartTax,cartTotal} = value;
    const{clearCart} = value;
    return (
        <React.Fragment>
            <div className = "container">
                <div className = "row">
                    <div className = "col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to= "/Products">
                            <button className = "btn btn-outline-danger text-uppercase mb-3 px-5" type = "button" onClick={()=> clearCart()}>
                            Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className = "text-title">
                                subtotal :
                            </span> <strong>${(Math.round(cartSubTotal * 100) / 100).toFixed(2)}</strong>
                        </h5>
                        <h5>
                            <span className = "text-title">
                                tax :
                            </span> <strong>${(Math.round(cartTax * 100) / 100).toFixed(2)}</strong>
                            
                        </h5>
                        <h5>
                            <span className = "text-title">
                                total :
                            </span> <strong>${(Math.round(cartTotal * 100) / 100).toFixed(2)}</strong>
                        </h5>
                        <PayPalButton total = {cartTotal} clearCart= {clearCart} history = {history} >

                        </PayPalButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
