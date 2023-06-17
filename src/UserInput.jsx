import React from "react";

export default function UserInput(props){
    return (
        <>
        <div>{props.title}</div>
        <input className="user-input-field" placeholder={props.placeholder} name={props.name} type={props.type} 
                    value={props.value} onChange={props.onChange}
                    min={props.min} max={props.max} accept={props.accept}
                    />
    
        </>

    )
        
}