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

const Top = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    /* Set the fixed height of the footer here */
    height: "10px",
    backgroundColor: "rgb(248, 249, 250);",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    borderTopColor: "rgb(180, 180, 180)"
}


const second = {
    backgroundImage: `url('${img2}' )`,
    minHeight: "23rem",
    backgroundSize: "cover",
};

const text = {
    backgroundColor: "000000",
}

const headerFirst = {
    fontSize: "50px",
}

const header = {
    paddingTop: "20px",
    paddingBottom: "40px",
    backgroundColor: "f5f5f5"
    
}

const desc = {
    fontSize: "17px",
    
}



export default function Contact(){
        return (
        <React.Fragment>
            <section className="showcase " >
                <footer className="footer" style = { Top }>
                    <div className="row" style = {header}>
                        <div class="col-md-12 "style = { text }>
                            <div class="row">
                                <div class="col-md-6 text-right align-left">
                                    <dd style = { desc }> 
                                        For general Enquiries:  
                                        <a href="mailto:info@biogloura.com.au">
                                            info@biogloura.com.au
                                        </a>
                                        <br/>
                                        For Administrative Enquiries:  
                                        <a href="mailto: admin@biogloura.com.au">
                                            admin@biogloura.com.au
                                        </a>
                                    </dd>
                                </div>
                                <div class="col-md-6">
                                    <dd style = {desc}>
                                        Call Us
                                        <br/>
                                        Phone us at : 0432575049
                                    </dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
         </React.Fragment>
        )
    }

