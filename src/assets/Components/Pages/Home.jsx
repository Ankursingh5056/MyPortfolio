import React from 'react'
import "./Home.css"
import { Container,Row ,Col,Table,Button,Stack} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Project from './Project'
import Myresume from './Myresume'

function Home() {
  return (
    <>
   
    <div className='video-box' >
      <video autoPlay muted>
        <source src='animation.mp4'></source>
      </video>
      <div className='box-shadow text-white d-flex justify-content-center align-items-center'>
        <div >
          <h2>Web/React-Developer</h2>
          <h4>Hi, I'm Ankur
          Singh</h4>
         
          <button className='btn btn-primary'>WELCOME</button>
        </div>
      </div>
    </div>
    <Container fluid >
      <Row>
        <Col className="col-md-6  col-sm-12  col-12 rounded" >
        <img src="AnkurPhoto.jpg" alt="photo" className="img-fluid rounded"/>
        </Col>
        <Col className="col-md-6 col-sm-12 col-12 rounded ">
        <div>
          <center><h2>About Me</h2></center>
          <p className='font-family-arina'>
          I am web developer. I recently completed a web development course from Masai School. which has given me the latest skills and knowledge in the web development industry. i worked 2 major projects with my friends. My focus is on designing and developing websites that great and work well . i am skilled in a range of programming languages and platforms, including HTML, CSS, JavaScript, Python ,React.js and currently learning Node.js for Backend. i enjoy working with other web developers to make websites that match the client's brand . i am committed to keeping up with the latest industry trends and best practices, and attend professional web development course to improve my skills. My goal is to create website that are both visually appealing and easy to use
          </p>

     <h6>Skills :-</h6>
     <li>Web  Development</li>

     <h6>Knowledge :-</h6>
     <li>HTML , CSS, JavaScript , Python , React.Js</li>
    <br />
    <br />
    <br />

    <h5>Education </h5>
    <h6>Graduation (2020-2023) :-</h6>
    <li>Graduate from Sangai International University</li>
    <br />

    <h6>Postgraduate Graduation (2024 - present) :-</h6>
    <li>MCA (Master of Computer Applications) from Chandigarh University Online</li>
    <br />

    <h6>Software Developing (2023-present) </h6>
    <Button><Link style={{textDecoration:"none"}} className="text-white"to={'https://drive.google.com/file/d/19UKc5UMyF3-30SQcrPc7PdE14l4FSP8F/view?usp=sharing'}>Click Here</Link> </Button>




        
        </div>
        </Col>
      </Row>
    </Container>

    <Project/> {/* All Projects*/}
    <br />
    <br />
<Container fluid>
<center><h1>-------Contact Me-------</h1></center>
<h3>Mobile number : 9315677601</h3> 
<h4>Email Id : ankurrajput931567@gmail.com</h4>
<Stack direction='horizontal' gap={4} className='justify-content-start'>
<Button><Link style={{textDecoration:"none"}} className="text-white"to={'https://www.linkedin.com/in/ankur-singh-101785270/'}>Linkedin</Link> </Button>

<Button><Link style={{textDecoration:"none"}} className="text-white"to={'https://github.com/Ankursingh5056'}>Github</Link> </Button>
<Myresume/>
</Stack>
</Container>

</>
  )
}

export default Home
