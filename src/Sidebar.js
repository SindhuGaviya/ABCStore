import React from "react";


class Sidebar extends React.Component{
    constructor(){
        super()
        this.state={
            departments:["Fitness Watches Monitors","Cell Phone Watches","Elliptical Machines","Treadmills","Exercise Bikes","Weight Scales","IPod MP3 Accessories"],
            brands : [
                      {id:1,title:"FitBit",status:false},
                      {id:1,title:"Samsung",status:false},
                      {id:1,title:"iFit",status:false},
                      {id:1,title:"LG",status:false},
                      {id:1,title:"Pebble",status:false},
                      {id:1,title:"Apple",status:true},
                      {id:1,title:"Moto 360",status:false},
                    ],

        }
    }
    render(){
        return(
           <div>
               <p className="button">Refine</p>
               
               <a style={{marginLeft:"40px",color:"blue",textDecoration:"underline",backgroundColor:"lightblue"}} href="#">Clear all Selections</a>
               <div >
               <p style={{marginLeft:"40px", marginTop:"20px"}}><strong>Departments</strong></p>
               <ul>
               {this.state.departments.map(ele=>{
                   return <li style={{listStyleType:"none"}}>{ele}</li>
               })}
               </ul>
               </div>
               <hr/>
               <div >
               <p style={{marginLeft:"40px"}}><strong>Brand</strong></p>
               <ul>
                   {this.state.brands.map(brand=>{
                       return (
                           <li style={{listStyleType:"none"}}><input type="checkbox" checked={brand.status}/> {brand.title}</li>
                           
                       )
                   })}
               </ul>
               </div>
               <hr/>
           </div>
        )
    }
}


export default Sidebar