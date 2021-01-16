import React from "react";
export default function YearBlock(props){
    let percent=(props.index)/(props.total+1);    
    let style={left:((percent*100))+"%"}

    return(
    <div className="date-block" style={style}>
       <span className="date-title">{props.year}</span>
    </div>
    );
}
