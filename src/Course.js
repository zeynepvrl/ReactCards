import React from "react";
function Course(props) {
  //console.log(props)   //consola yazdırıyor
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.image} alt="Kurslarım" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
          </div>
        </div>

        <div className="content">{props.description}</div>
      </div>
    </div>
    /*
    <div>
        <img src={props.image} alt="" />   
        <div>{props.title}</div>
        <div>{props.description}</div>
    </div> */
  );
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
