import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
import { createImportSpecifier } from 'typescript';

const ProductContext = React.createContext()

class ProductProvider extends Component {

    

    state = {
        products: [], 
        detailProduct: detailProduct,
        cart: [],
        cartTax:0,
        cartTotal:0
    }


    updateCart(){
        let cart = JSON.parse(localStorage.getItem("Cart"));
        if (cart != null){
            return cart
        }
        return [];
        
    }

    updateProducts(){
        let product = JSON.parse(localStorage.getItem("Products"));
        if (product != null){
            return product
        }
        return [];
        
    }

    componentDidMount() {
            this.setProducts();

        const inCart = this.updateCart();

        this.setState(()=>{
            return {cart:[...inCart]};
        },()=>{ 
            this.addTotals();
            localStorage.setItem('Cart',JSON.stringify(this.state.cart));
            localStorage.setItem('Products', JSON.stringify(this.state.products));
            
        });
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
            localStorage.setItem('Cart',JSON.stringify(this.state.cart));
            localStorage.setItem('Products', JSON.stringify(this.state.products));
        }
      }
    

    setProducts = () =>{
        let product = JSON.parse(localStorage.getItem("Products"));
        if (product == null){
            console.log("localStorage was empty")
            let tempProducts = [];
            storeProducts.forEach(item =>{
                const singleItem = {...item};
                tempProducts = [...tempProducts,singleItem];
            });
            this.setState(()=>{
                console.log(tempProducts);
                return {products: tempProducts}
                
            });
        }else{
            let tempProducts = product;
            this.setState(()=>{
                console.log(tempProducts);
                return {products: tempProducts}  
            });
        }
        
    }



    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product; 
    }

    getItemAlt = (id) =>{
        const products = this.updateProducts();
        const product = products.find(item => item.id === id);
        console.log(products + "wow somehthing:" + product);
        return product; 
    }

    handleDetail = (id) =>{ 
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })        
    }

    compare = (a,b) =>{
        if (a.id < b.id){
            return -1;
        }
        if(a.id > b.id){
            return 1;
        }
        return 0;
    }
    
    addToCart = id =>{

        const inCart = this.updateCart();
 
        const products = this.updateProducts();

        
        
        let tempProducts = [...this.state.products];   
        
        

        const wait = products.filter(item => item.id === id);
        const temp = tempProducts.filter(item => item.id !== id);

        //console.log(wait);
        //console.log(tempProducts);
        
        const product = wait[0];

        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        wait[0] = product;
        console.log(temp);
        console.log(wait);
        console.log(tempProducts);
        tempProducts = [...temp,...wait];
        tempProducts.sort(this.compare);

        let tempCart = [...inCart,product]
        tempCart.sort(this.compare); 


        this.setState(()=>{
            return {products:[...tempProducts],cart:[...tempCart], detailProduct: { ...product}};
        },()=>{ 
            this.addTotals();
            localStorage.setItem('Cart',JSON.stringify(this.state.cart));
            localStorage.setItem('Products', JSON.stringify(this.state.products));
            localStorage.setItem('Detail', JSON.stringify(this.state.detailProduct));
            // console.log(this.state.cart);
        });

       
    };
         
   
    
    
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const cart = this.updateCart();

      

        const specItem = cart.filter(item => item.id === id);
        const temp = tempCart.filter(item => item.id !== id);

        const product = specItem[0];
        product.count = product.count +1;
        product.total = product.count * product.price;
        specItem[0] = product;
        tempCart = [...temp,...specItem]
        tempCart.sort(this.compare);
        
        console.log(tempCart);

        this.setState(()=>{
            return {cart:[...tempCart]};
        },()=>{ 
            this.addTotals();
            localStorage.setItem('Cart',JSON.stringify(this.state.cart));
            localStorage.setItem('Products', JSON.stringify(this.state.products));
            // console.log(this.state.cart);
        });

    }

    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const cart = this.updateCart();

      

        const specItem = cart.filter(item => item.id === id);
        const temp = tempCart.filter(item => item.id !== id);

        const product = specItem[0];
        if(product.count > 1){
            product.count = product.count -1;
            product.total = product.count * product.price;
            specItem[0] = product;
            tempCart = [...temp,...specItem]
            tempCart.sort(this.compare);
            
            console.log(tempCart);
        }    
        this.setState(()=>{
            return {cart:[...tempCart]};
        },()=>{ 
            this.addTotals();
            localStorage.setItem('Cart',JSON.stringify(this.state.cart));
            localStorage.setItem('Products', JSON.stringify(this.state.products));
            // console.log(this.state.cart);
        });
        
    }
    
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProducts],    
            }
        },
        () => {
            this.addTotals();
            localStorage.setItem('State',JSON.stringify(this.state));
        }
        )
    }

    clearCart = () =>{
        let tempProducts = [];
            storeProducts.forEach(item =>{
                const singleItem = {...item};
                tempProducts = [...tempProducts,singleItem];
            });

        this.setProducts();
        this.setState(()=>{
            return {cart:[] ,products: tempProducts};
        },()=>{ 
            this.addTotals();
            localStorage.setItem('Cart',JSON.stringify(this.state.cart));
            localStorage.setItem('Products', JSON.stringify(this.state.products));
        });
    }

    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState (()=>{
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal:total
            }
            },() => {
                
            }
        );
    }

    render() {
                return (
                    <ProductContext.Provider value = {{
                        ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem,
                        clearCart: this.clearCart
                    }}>
                    {this.props.children} 
                    </ProductContext.Provider>
                )
        }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};