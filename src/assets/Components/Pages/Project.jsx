import React from 'react'
import { Container,Row,Col, Button, Stack } from 'react-bootstrap'
import "./Product.css"
import { Link } from 'react-router-dom'

function Project() {
  return (
    <Container fluid>
      <center><h1>-------Projects-------</h1></center>
      <Row >
        {/*Product 1*/}
        <Col className='col-md-4 col-sm-4 col-12' >
        <img  className="img-fluid rounded"src="product.png" alt="product" />
        <center><h3>Ecommerce website</h3></center>
        <Stack direction='horizontal' gap={4} className='justify-content-center'>
        <Button className='ButtonProject product-btn' variant='outline-primary'  ><Link style={{textDecoration:"none"}} to={"https://e-commerce-website00.vercel.app/products"}>Go to Live</Link></Button>
        <Button className='ButtonProject'variant='outline-success' ><Link style={{textDecoration:"none"}} to={"https://github.com/Ankursingh5056/e-commerce-website"}>Go Github</Link></Button>
        </Stack>

        </Col>

        {/*Product 2*/}
        <Col className='col-md-4  col-sm-4 col-12'>
        <img  className="img-fluid rounded"src="bewakoof.png" alt="product" />
        <center><h3>Bewakoof.com</h3></center>

        <Stack direction='horizontal' gap={4} className='justify-content-center'>
        <Button className='ButtonProject product-btn' variant='outline-primary'  ><Link style={{textDecoration:"none"}} to={"https://bewakoof-web-side.vercel.app/"}>Go to Live</Link></Button>
        <Button className='ButtonProject'variant='outline-success' ><Link style={{textDecoration:"none"}} to={"https://github.com/Ankursingh5056/Bewakoof-web-side"}>Go Github</Link></Button>
        
        </Stack>
        </Col>

         {/*Product 3*/}
        <Col className='col-md-4  col-sm-4 col-12'>
        <img  className="img-fluid rounded"src="skiinstore.png" alt="product" />
        <center><h3>SkinStore.com</h3></center>

        <Stack direction='horizontal' gap={4} className='justify-content-center'>
        <Button className='ButtonProject product-btn' variant='outline-primary'  ><Link style={{textDecoration:"none"}} to={"https://incredible-dragon-67f7b1.netlify.app/"}>Go to Live</Link></Button>
        <Button className='ButtonProject'variant='outline-success' ><Link style={{textDecoration:"none"}} to={"https://github.com/Ankursingh5056/SkinStore"}>Go Github</Link></Button>
        
        </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Project
