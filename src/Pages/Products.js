import React from 'react'
import {Card, Button} from 'react-bootstrap'



const product = {
    paddingLeft: "50px",
    paddingTop: "50px"
}

export default function Products() {
    return (
        <React.Fragment>
            <div className="container" style = {{paddingLeft: "65px", paddingTop: "50px"}}>
                <div className="row bspace ">
                <h2>Products</h2>
                </div>
            </div>

            <div className="container" style = {product} > 
                <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                    One of three columns
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                </div>
                <div class="row align-items-end">
                    <div class="col">
                    One of three columns
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
