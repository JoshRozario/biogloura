import React, { Component } from 'react'
import '../App.css'
import Title from '../Components/Title';
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






export default class About extends Component {
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
                        <h2>Get into contact with us!</h2>
                        <p className="lead mb-0 ofw">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
                        </p>
                        <br/>
                        
                        </div>
                        
                        
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={text} >
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0 ofw">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
                        </p>
                        <br/>
                        
                        </div>
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
