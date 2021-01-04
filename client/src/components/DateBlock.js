import React from "react";
export default function DateBlock(props){
    let totalTime=props.max-props.min;
    totalTime=totalTime/1000/60/60/24;
    if(!props.data.endDate){
        // If there is no end date, the event is still ongoing
        // we'll need to calculate the length of the event every time we load it,
        // based on today's date
        let end=new Date();
        let start=new Date(props.data.startDate);
        let diffDate=(end-start)/1000/60/60/24;
        props.data.howManyDays=diffDate;
    }
    let days=1;
    // Some events have an end date but are still zero days long--if they began and ended on the same day
    // For those, we will default to 1 day just so we can see them on the screen.
    if(props.data.howManyDays === 0) days=1;
    else{
        days=(props.data.howManyDays/totalTime)*100;
    }
    if(days<=1){
        // For events that take place in a single instant (like one's birth, say) we just default to calling it 
        // one day, and then we make sure to move the event title over a little to clean it up
        days=1;
    }
    // How far to the right should this go? Well, how many milliseconds in this startdate from the minimum startdate?
    // for this screen?
    let left=(new Date(props.data.startDate)-props.min);
    // Now convert it to days
    left=left/1000/60/60/24;
    // and find the percentage of totalTime
    left=(left/totalTime)*100;
    left-=1;
    let style={left:left+"%"}
    if(props.prev){
        if(props.prev.substring(0,4)===props.data.startDate.substring(0,4)) style={display:"none"};

    }
    return(
    <div className="date-block" style={style}>
       <span className="date-title">{props.data.startDate.substring(0,10)}</span>
    </div>
    );
}
