import React from "react";
import {Card,Button ,CardColumns} from "react-bootstrap";
import prod1 from './prod01[1].png'
import prod2 from './prod02[1].png'
import prod3 from './prod05[1].png'

class Shop extends React.Component{
    constructor(){
      super()
      this.state={
         
      }
    }
    render(){
      return(
        <div>

 <CardColumns>
<Card style={{ width: '15rem', height:'30rem'}}>
  <Card.Img variant="top" src={prod1} style={{ height : "200px"}} />
  <Card.Body>
    <Card.Text style={{fontSize: "13px"}}>
      Smart-watch Sweatproof Smart 
      Watch Phone /bluetooth 4.0/Easy 
      connection/ for Apple Iphone 
    </Card.Text>
    <Button variant="secondary" style={{marginLeft:"40px", marginTop:"30px"}}>Out of Stock</Button>
  </Card.Body>
</Card>
<Card style={{ width: '15rem', height:'30rem' }}>
<Button variant="primary" style={{margin:"10px"}}>top rated</Button>
  <Card.Img variant="top" src={prod2} style={{ height : "200px"}} />
  <Card.Body>
    <Card.Text style={{fontSize: "13px"}}>
    MisFit Swarovski Shine Slake Set
    Activity & Sleep Monitor (Various...
      <p style={{color:"#00ACEC"}}>Free Shipping</p>
      <s style={{color:"black",textDecorationColor:"red", float:"left", width:"60%",fontSize:"25px"}}>$250.98</s>
      <p style={{float:"right",width:"40%",fontSize:"25px"}}>$185<sup>00</sup></p>
    </Card.Text>
    
    <Button variant="success" style={{marginLeft:"80px"}}>Buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '15rem', height:'30rem' }}>
<Button variant="primary" style={{margin:"10px"}}>top rated</Button>
  <Card.Img variant="top" src={prod3} style={{ height : "200px"}}/>
  <Card.Body>
    <Card.Text style={{fontSize: "13px"}}>
    MisFit Swarovski Shine Slake Set
    Activity & Sleep Monitor (Various...
    <br style={{marginTop:"20px"}}></br>
      <s style={{color:"black",textDecorationColor:"red", float:"left", width:"50%",fontSize:"25px",marginTop:"30px"}}>$185</s>
      <p style={{float:"right",width:"50%",fontSize:"25px",marginTop:"30px"}}>$185<sup>00</sup></p>
    </Card.Text>
    <Button variant="success" style={{marginLeft:"70px"}}>Buy</Button>
  </Card.Body>
</Card>
</CardColumns> 
<br/>
<br/>
<CardColumns>
<Card style={{ width: '15rem', height:'30rem'}}>
<Button variant="primary" style={{margin:"10px"}}>top rated</Button>
  <Card.Img variant="top" src={prod1} style={{ height : "200px"}} />
  <Card.Body>
    <Card.Text style={{fontSize: "13px"}}>
      Smart-watch Sweatproof Smart 
      Watch Phone /bluetooth 4.0/Easy 
      connection/ for Apple Iphone 
    </Card.Text>
    <Button variant="secondary" style={{marginLeft:"40px", marginTop:"30px"}}>Out of Stock</Button>
  </Card.Body>
</Card>
<Card style={{ width: '15rem', height:'30rem' }}>
  <Card.Img variant="top" src={prod2} style={{ height : "200px"}} />
  <Card.Body>
    <Card.Text style={{fontSize: "13px"}}>
    MisFit Swarovski Shine Slake Set
    Activity & Sleep Monitor (Various...
      <p style={{color:"#00ACEC",marginTop:"30px"}}>Free Shipping</p>
      <s style={{color:"black",textDecorationColor:"red", float:"left", width:"60%",fontSize:"25px",marginTop:"30px"}}>$430.99</s>
      <p style={{float:"right",width:"40%",fontSize:"25px",marginTop:"30px"}}>$242<sup>98</sup></p>
    </Card.Text>
    <Button variant="success" style={{marginLeft:"80px"}}>Buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '15rem', height:'30rem' }}>
<Button variant="primary" style={{margin:"10px"}}>top rated</Button>
  <Card.Img variant="top" src={prod3} style={{ height : "200px"}}/>
  <Card.Body>
    <Card.Text style={{fontSize: "13px"}}>
    MisFit Swarovski Shine Slake Set
    Activity & Sleep Monitor (Various...
      <br style={{marginTop:"20px"}}></br>
      <s style={{color:"black",textDecorationColor:"red", float:"left", width:"60%",fontSize:"25px",marginTop:"30px"}}>$480.50</s>
      <p style={{float:"right",width:"40%",fontSize:"25px",marginTop:"30px"}}>$270<sup>80</sup></p>
    </Card.Text>
    <Button variant="success" style={{marginLeft:"70px"}}>Buy</Button>
  </Card.Body>
</Card>
</CardColumns> 
        </div>
      )
    }
  }

export default Shop