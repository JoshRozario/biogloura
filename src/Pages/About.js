import React, { Component } from 'react'
import '../App.css'
import Title from '../Components/Title';
import img1 from '../img/testimonials-3.jpg'
import img2 from '../img/AloeVera.jpg'



const first = {
    backgroundImage: `url('${img1}' )`,
    minHeight: "24rem",
    backgroundSize: "cover",
};


const second = {
    backgroundImage: `url('${img2}' )`,
    minHeight: "23rem",
    backgroundSize: "cover",
};

const text = {
    padding: "3rem",
}






export default class Contact extends Component {
    render() {
        return (
            <section className="showcase" >
                <div className="container" >
                    <div className=" justify-content-center bspace">
                    <Title name = "About" title ="us"/>
                    </div>
                    

                    <div className="row no-gutters align-items-center justify-content-center bspace " >
                    <div className="row no-gutters align-items-center justify-content-center bspace">
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={text} >
                        <h2>Our Goal</h2>
                        <p className="lead mb-0 ofw">
                            We strive to create the products which are untainted by artifical ingredients and processes. We believe that the best and safest creams are organic, pure and filled with only natural high quality ingredients.
                        </p>
                        <br/>
                        
                        </div>
                        
                        
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={text} >
                        <h2>Ask us your questions!</h2>
                        <p className="lead mb-0 ofw">If you have ANY questions about our creams, delivery times or prices feel free to contact us with the details provided at the bottom of this page
                        </p>
                        <br/>
                        
                        </div>
                    </div>
                    </div>

                    <div className="row no-gutters align-items-center justify-content-center bspace ">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img " style={first}></div>
                        <div className="col-lg-6 order-lg-1 my-auto "  style={text} >
                        <h2>Browse our line of products </h2>
                        <p className="lead mb-0 ofw" >We have a range of products currently available and are only planning to expand! feel free to browse our products</p>
                        <br/>
                        <a href="/products" className="butn-pink" >Shop now!</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
