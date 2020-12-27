import React from "react";
export default function EventBlock(props){
    let totalTime=props.max-props.min;
    totalTime=totalTime/1000/60/60/24;
    let days=1;
    if(props.data.howManyDays === 0) days=1;
    else{
        days=(props.data.howManyDays/totalTime)*100;
    }
    if(days<1) days=1;
    // How far to the right should this go? Well, how many milliseconds in this startdate from the minimum startdate?
    // for this screen?
    let left=(new Date(props.data.startDate)-props.min);
    // Now convert it to days
    left=left/1000/60/60/24;
    // and find the percentage of totalTime
    left=(left/totalTime)*100;
    let height=30;
    let style={position:"relative", height:height+"px", left:left+"%",width:days+"%"}
    return(
    <div className="event-block" style={style}>
        {props.data.title}
    </div>
    );
}
