import React from "react";
export default function EventBlock(props){
    const ORIENTATION="h";
    let totalTime=props.max-props.min;
    totalTime=totalTime/1000/60/60/24;
    let days=1;
    if(props.data.howManyDays === 0) days=1;
    else{
        days=(props.data.howManyDays/totalTime)*100;
    }
    let titleClass="event-title"
    if(days<=1){
        // For events that take place in a single instant (like one's birth, say) we just default to calling it 
        // one day, and then we make sure to move the event title over a little to clean it up
        days=1;
        titleClass+=" short"
    }
    // How far to the right should this go? Well, how many milliseconds in this startdate from the minimum startdate?
    // for this screen?
    let left=(new Date(props.data.startDate)-props.min);
    // Now convert it to days
    left=left/1000/60/60/24;
    // and find the percentage of totalTime
    left=(left/totalTime)*100;
    let height=30;
    let style={position:"relative", height:height+"px", left:left+"%",width:days+"%"}
    if(ORIENTATION==="v"){
        let top=(new Date(props.data.startDate)-props.min);
        top=top/1000/60/60/24;
        let heightAsPercent=(props.data.howManyDays/totalTime);
        height=props.data.howManyDays;
        let width=60;
        left=props.index*width;
        top=top*props.heightScale;
        height=height*props.heightScale;
        if(height<55) {
            height=55;            
        }
        style={position:"absolute", width:width+"px", left:left+"px", top:top+"px",height:height+"px", display:"inline"}
    }
    return(
    <div className="event-block" style={style}>
       <span className={titleClass}>{props.data.title}</span>
    </div>
    );
}
