import React, { Component } from 'react'
import '../App.css'
import img1 from '../img/Citrus.jpg'
import img2 from '../img/AloeVera.jpg'
import img3 from '../img/Curcumin.jpg'

import slide1 from '../img/biogloura_web3.png'
import slide2 from '../img/Slide2.png'



const first = {
    backgroundImage: `url('${img1}' )`,
    minHeight: "24rem",
    backgroundSize: "cover",
};




const second = {
    backgroundImage: `url('${img3}' )`,
    minHeight: "23rem",
    backgroundSize: "cover",
};

const third = {
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

                <div className="container-fluid p-0 d-none d-lg-block">
                    <div className="row">
                        <div className="col-md-12 min-v-100">
                            <div className="carousel slide" id="carousel-136694">
                                <ol className="carousel-indicators">
                                    <li data-slide-to="0" data-target="#carousel-136694">
                                    </li>
                                    <li data-slide-to="1" data-target="#carousel-136694">
                                    </li>
                
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" alt="Carousel Bootstrap First" src={slide1} />
                                    
                                      </div>
                                  {/*  <div className="carousel-item ">
                                        <img className="d-block w-100" alt="Carousel Bootstrap Second" src={slide2} />
                                        
                                    </div>*/}
                                    
                                </div> <a className="carousel-control-prev" href="#carousel-136694" data-slide="prev"><span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" href="#carousel-136694" data-slide="next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div className="container" >
                <div className="row no-gutters align-items-center justify-content-center bspace">
                    <div className="col-lg-6 order-lg-2 text-white " style={first}/> 
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={text} >
                    <h2>Why our cream is different</h2>
                    <p className="lead mb-0 ofw">The main ingredients in biogloura Cream contain antioxidants such as vitamin C, vitamin E, grape seed oil. It is also packed with anti-inflammatory agents such as curcumin from tumeric extracts, neem oil extract and aloe vera extract. The active ingredients are carefully prepared in optimal conditions to retain their healing and anti-inflammatory capabilities in order to keep your skin looking young and healthy.
                    </p>
                    <br/>
                    <a href="/products" className="butn-pink">Shop now</a>
                    </div>
                </div>

                <div className="row no-gutters align-items-center justify-content-center bspace " >
                    <div className="col-lg-6 text-white " style={second}></div>
                    <div className="col-lg-6 my-auto "  style={text}    >
                    <h2>Curcumin</h2>
                    <p className="lead mb-0 ofw">Curcumin is the active ingredient present in turmeric which is obtained from the root. Turmeric has been used as medicine in India over thousands of years. Turmeric is known for its anti-inflammatory and anti-oxidative activity and works for over a wide-range of  skin diseases. Turmeric is known to treat acne and eczema and helps to reduce inflammation. As an antioxidant, turmeric promotes rejuvenating of skin and helps to enhance skin healing.</p>
                    <br/>
                    <a href="/about" className="butn-green">Learn More</a>
                    </div>
                </div>

                <div className="row no-gutters align-items-center justify-content-center bspace ">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img " style={third}></div>
                    <div className="col-lg-6 order-lg-1 my-auto "  style={text} >
                    <h2>Aloe Vera </h2>
                    <p className="lead mb-0 ofw" >Aloe vera plant has been used for centuries containing a wide-range of active ingredients for skin care. Aloe vera extract in biogloura Cream contains many active ingredients such as vitamins, enzymes, minerals, anthraquinones and natural hormones  with analgesic, antibacterial, antiviral and wound healing activities.</p>
                    <br/>
                    <a href="#" className="butn-pink" >Back to top</a>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
