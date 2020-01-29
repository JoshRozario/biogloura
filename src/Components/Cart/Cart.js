 import React, { Component, useEffect } from 'react';
 import Title from '../Title';
 import CartColumns from "./CartColumns";
 import EmptyCart from "./EmptyCart";
 import {ProductConsumer} from "../../context";
 import CartList from './CartList';
 import CartTotals from './CartTotals'


 export default class Cart extends Component {
   // componentDidMount(){
    //    const savedState = JSON.parse(localStorage.getItem("State"))
    //    console.log("blah");
    //    console.log({...savedState});
    //    console.log("blah");
    //} 
    render() {
       
         return (
             <section>
                 <ProductConsumer>
                    {value=> {
                        const {cart} = value;
                    
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <Title name = "Your" title = "Cart" />
                                    <CartColumns/> 
                                    <CartList value = {value}/>
                                    <CartTotals value = {value} history ={this.props.history} />
                                </React.Fragment>
                            )
                        }else{
                            return <EmptyCart/>
                        }
                    }} 
                 </ProductConsumer>
             </section>
         )
     }
 }
 