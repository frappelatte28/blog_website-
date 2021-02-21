import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from './card.js';
import {Link} from 'react-router-dom';
// import blogs from "./blogs.json"
const blogs= [
    {

    _id:"1",
    name:"blog1",
    image:"image",
    description:"this is blog 1",
    date:"12/12/1200"


}
,
{

    _id:"2",
    name:"blog2",
    image:"image",
    description:"this is blog 3",
    date:"12/12/1200"


}

,
{

    _id:"3",
    name:"blog3",
    image:"image",
    description:"this is blog 3",
    date:"12/12/1200"


}
]
function Cards(){
    
    return (
      
        <div>
           { blogs.map((blog,index) =>
                <Card id={blog._id} name={blog.name} image={blogs.image} discription={blogs.description} date={blog.date} /> 
            )
           }
        </div>
    )
}

export default Cards;