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
            <section className="showcase">
                <div className="container" >
                <div className="row no-gutters align-items-center justify-content-center bspace">
                    <div className="col-lg-6 order-lg-2 text-white " style={first}> </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={text}>
                    <h2>Fully Responsive Design</h2>
                    <p className="lead mb-0 ofw">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
                    </p>
                    <br/>
                    <a href="#" className="butn-pink">Link Button</a>
                    </div>
                </div>

                <div className="row no-gutters align-items-center justify-content-center bspace " >
                    <div className="col-lg-6 text-white " style={second}></div>
                    <div className="col-lg-6 my-auto "  style={text}>
                    <h2>Updated For Bootstrap 4</h2>
                    <p className="lead mb-0 ofw">Newly improved, and full of great utility classNamees, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
                    <br/>
                    <a href="#" className="butn-green">Link Button</a>
                    </div>
                </div>

                <div className="row no-gutters align-items-center justify-content-center bspace ">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img " style={first}></div>
                    <div className="col-lg-6 order-lg-1 my-auto "  style={text}>
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
