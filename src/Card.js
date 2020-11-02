import React from "react";
// import './styles.css'

function Card(props){
  return (
    <div 
        className="row" 
        id={props.id_name}
        style={{
            width: '200px',
            height: props.height,
            backgroundColor: props.color,
        }}
        >
    </div>
  );
}


export default Card;