import React from "react"
import {Card,Container, Button, Row, Col} from "react-bootstrap"


class Footer extends React.Component{
    constructor(){
        super()
        this.state={
            items:["Membership","Shipping & Delivery","Help","Resources"],
            terms:["Site Directory","Privacy Policy","Terms and Conditions","About Our Ads"]
        }
    }

    render(){
        return(
            <div>
<Container>
<Row > 
    <div>
    <h1 style={{ fontFamily:"TimesNewRoman",fontSize:"24px"}}>Get more out of your membership</h1>
    <p style={{color: "#909090" ,fontFamily:"Aria",fontSize:"15px"}}>Subscribe to save with daily shocking values, club updates and more!</p>
    </div>
    <div style={{marginLeft:"300px"}}>
        <p style={{fontFamily:"Aria",fontSize:"15px"}} >Subscribe to our Newsletter</p>
        <form >
            <input type="email" name="email" placeholder="email address"/>
            {/* <button style={{backgroundColor:"blue"}}>Subscribe</button> */}
            <input style={{backgroundColor:"#00ACEC",border:"none", margin:"2px 2px 2px 6px",padding:"2.5px 10px 2.5px 10px",color:"#fff",borderRadius:"5px"}} type="submit" value="Subscribe"/>
        </form>
    </div>
    <hr></hr>
    <div style={{marginRight:"10px",fontFamily:"Aria",fontSize:"12px"}}>
        <ul>
        {this.state.items.map(item=>{
            return <li style={{listStyleType:"none"}}>{item}</li >
        })}
        </ul>
    </div>
    <div style={{marginLeft:"30%", marginTop:"25px"}}>
        {this.state.terms.map(term=>{
            return <span style={{marginLeft:"25px",marginTop:"10px",fontFamily:"Aria",fontSize:"12px"}}>{term}</span>
        })}
        <div style={{marginLeft:"40%"}}>
            <p style={{marginLeft:"25px",fontFamily:"Aria",fontSize:"12px"}}><span>&#169; 2000-2015, ABC, inc. All rights reserved</span></p> 
        </div>
    </div>
</Row>
</Container>
            </div>
        )
    }
}

export default Footer