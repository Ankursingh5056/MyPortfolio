import { Nav,Navbar,Container,Button } from "react-bootstrap"
import menu from "./Menu.json"
import { Link } from "react-router-dom"
import "./Navbar.css"
function Menu({data}){
  
  return(
    <>
    {
      data.map((ele,i)=>{
        return(
          <Button className="btn-custom d-flex align-item-center">
        <Link  to={ele.link} className="nav-link text-light">{ele.label}</Link>
        </Button>
      )
      })
    }
    
    </>
  )
}

function NavbarInfo() {
  return (
    <div>
      <Navbar expand="lg"    className=" fixed-top">
      <Container fluid>
        <Navbar.Brand className='text-light fw-bold brand'  >Ankur Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end w-100"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Menu data ={menu}/>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarInfo
