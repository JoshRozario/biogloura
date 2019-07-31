import React from "react";
import { Container } from 'react-bootstrap';

export default function Layout(props) {
    return(
        <Container style={{paddingTop:"80px" }}>
            { props.children }
        </Container>
    )
}