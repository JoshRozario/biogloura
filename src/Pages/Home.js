import React, { Component } from 'react'
import '../App.css'
import img1 from '../img/Citrus.jpg'
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




export default class Home extends Component {
    render() {
        return (
            <section className="showcase" >
                <div className="container" >
                <div className="row no-gutters align-items-center justify-content-center bspace">
                    <div className="col-lg-6 order-lg-2 text-white " style={first}/> 
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={text} >
                    <h2>Fully Responsive Design</h2>
                    <p className="lead mb-0 ofw">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
                    </p>
                    <br/>
                    <a href="#" className="butn-pink">Shop now</a>
                    </div>
                </div>

                <div className="row no-gutters align-items-center justify-content-center bspace " >
                    <div className="col-lg-6 text-white " style={second}></div>
                    <div className="col-lg-6 my-auto "  style={text}    >
                    <h2>Why our cream is different</h2>
                    <p className="lead mb-0 ofw">The main ingredients in biogloura Cream contain antioxidants such as vitamin C, vitamin E, grape seed oil. It is also packed with anti-inflammatory agents such as curcumin from tumeric extracts, neem oil extract and aloe vera extract. The active ingredients are carefully prepared in optimal conditions to retain their healing and anti-inflammatory capabilities in order to keep your skin looking young and healthy.</p>
                    <br/>
                    <a href="#" className="butn-green">Learn More</a>
                    </div>
                </div>

                <div className="row no-gutters align-items-center justify-content-center bspace ">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img " style={first}></div>
                    <div className="col-lg-6 order-lg-1 my-auto "  style={text} >
                    <h2>Easy to Use &amp; Customize</h2>
                    <p className="lead mb-0 ofw" >Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    <br/>
                    <a href="#" className="butn-pink" >Link Button</a>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
