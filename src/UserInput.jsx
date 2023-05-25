import React from "react";

export default function UserInput(props){
    return (
        <>
        <div>{props.title}</div>
        <input className="user-input-field" type={props.type} />
    
        </>

    )
        
}