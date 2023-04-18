import React from 'react'                          
function Course(props) {
    //console.log(props)   //consola yazdırıyor
    return ( 
    <div>
        <img src={props.image} alt="" />   
        <div>{props.title}</div>
        <div>{props.description}</div>
    </div> );
}

export default Course;             
  
/*function Course(props) {
    const title=props.title;
    const description=props.description;
    return ( 
    <div>
        <div>{title}</div>
        <div>{description}</div>
    </div> );
    
    
    function Course({title,description}) {
    console.log(props)   //consola yazdırıyor
    return ( 
    <div>
        <div>{title}</div>
        <div>{description}</div>
    </div> );*/

