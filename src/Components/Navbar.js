import React from "react";
import styled from 'styled-components';
import logo from '../img/logo.png'

const Styles = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700');
    padding-top: 77px
` ;

const bottom = {
    borderBottomStyle: "solid",
    borderBottomWidth: "0.8px",
    borderBottomColor: "rgb(180, 180, 180)"
}

export default function Navbar(){
    return (
        <Styles>
             <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light fixed-top" style = { bottom }>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0" id = "navbarTogglerDemo01">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link pl-0" href="/">Home <span className="sr-only">Home</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                           {/* <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                                </li> */}

                        </ul>
                    </div>
                    <a href="/" className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25"><img src = { logo } style = {{ height: "50px"}}/> BioGloura </a>
                    <div className="navbar dual-nav w-50 order-2">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Styles>
          
    )
}