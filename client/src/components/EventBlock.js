import React from "react";
export default function EventBlock(props){
 
    return(
    <div className="event-block">
        {props.data.title}
    </div>
    );
}
