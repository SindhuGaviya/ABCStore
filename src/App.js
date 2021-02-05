import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Grid, Row, Col, Container, Nav , Navbar } from "react-bootstrap";
import Shop from "./Shop";
import logo from "./logo[1].png"
import Sidebar from "./Sidebar";
import Trend from "./Trend";
import Footer from "./Footer";

function App() {
  return (
    <div className="home">
     <Container fluid>
       <Row style={{backgroundColor:"#f5f5f5"}}>
       <Col className="header" xs={12} md={12}>
         <span>Try Prime Membership Today</span>
         <span style={{float:"right"}}>Join Now</span>
        </Col>
       </Row>
      
      <Row>
        <Col xs={12} md={12}>
        <Navbar.Brand>
        <img src={logo}  height={50} width={100} style={{ marginLeft: "50", marginRight: "50" }} />
        </Navbar.Brand>
        <Nav defaultActiveKey="#first" className="active">
        <Nav.Item>
          <Nav.Link href="#first">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link1">Business</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link2">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link3"><div>
          <form>
            <input type="text" placeholder="Search" style={{borderRadius:"20px", padding:"5px 550px 5px 5px",color:"f5f5f5"}}/>
          </form>
          </div></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link4">Track Order</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link5">Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link6">Cart</Nav.Link>
        </Nav.Item>
      </Nav>
      
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={12} md={5}>
        <h1 className="heading">Wearable Technology</h1>
        </Col>
      </Row>
          <Row>
          <Col id="sidebar-wrapper" >
            <Sidebar/>
          </Col>
          <Col></Col>
          <Col xs={8} id="page-content-wrapper" float="right">
           <Shop/>
          </Col>
      </Row>
      <Row>
        <Col xs={12} md={5}>
       <h1 className="heading">Buying Trend</h1>
        </Col>
      </Row>
       <Trend/>
       <br/>
       <br/>  
       <Footer/>
     </Container>
    </div>  
  );
}




export default App