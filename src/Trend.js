import React from "react"
import {Card,Container, Button, Row, Col} from "react-bootstrap"

class Trend extends React.Component{
    constructor(){
        super()
        this.state={
            items:[
                {id:1,title:"Moto 360 (20)", color:"green", width:"300px"},
                {id:2,title:"iWatch (30)", color:"orange", width:"400px"},
                {id:3,title:"Samsung (10)", color: "yellow", width:"150px"},
                {id:4,title:"LG (5)", color: "blue", width:"60px"}
            ]
        }
    }

    render(){
        return(
            <div>
<Container>
<Row > 
    <div style={{float:"left", width:"65%"}}> 
    <Col xs={7} >
 <Card style={{ width:"710px",height: "340px"}} >
  <Card.Body >
   <ul className="box-1">
       {this.state.items.map(ele=>{
             return (
                 <li 
                 key={ele.id} 
                 style={{backgroundColor:ele.color,listStyleType:"none", width:ele.width}}
                 >
                {ele.title}
                </li>
             )
       })}
   </ul>
  </Card.Body>
</Card>
</Col>
</div>
<div style={{float:"right",width:"35%"}}>
<Col xs={5}>
<section style={{ backgroundColor: "#AEDB02", width:"405px" , height: "340px"}}>

<br/>
<div style={{marginLeft:"30px"}}>
<p style={{fontSize:20, color:"blue"}}><strong>4 days only - 98 left</strong></p>
    <p style={{fontSize:10}}>KitchenAid Classic 4.5-Qt Stand Mixer</p>
    <strong style={{fontSize:30}}>$199<sup>98</sup></strong>
    <br/>
    <s style={{color:"black",textDecorationColor:"red"}}>$XX,XXX,XX</s>
    <br/>
    <p style={{color:"red",fontSize:"10px"}}>FREE SHIPPING</p>

    <strong>why we love it</strong>
    <br/>
    The Professional Stand Mixer is perfect for heavy,
    dense mixtures. Mix, knead and whip ingredients
    into culinary masterpieces.
</div>
</section>
</Col>
</div>
</Row>
</Container>
            </div>
        )
    }
}

export default Trend