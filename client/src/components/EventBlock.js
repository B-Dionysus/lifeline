import React from "react";
export default function EventBlock(props){
    let startingYear=new Date("01-01-"+props.min.getFullYear());
    function showDesc(data){
        // The description box that pops up when you click on the event block
        let descBox=document.getElementById("description-box");
        let descText=document.getElementById("desc-box-body");
        document.getElementById("desc-title").innerHTML=data.title;
        // Parse the date string to make it easier to read
        let start=data.startDate.substring(5,7)+"/"+data.startDate.substring(8,10)+"/"+data.startDate.substring(0,4);
        let end="Ongoing"
        if(data.endDate)
            end=data.endDate.substring(5,7)+"/"+data.endDate.substring(8,10)+"/"+data.endDate.substring(0,4);

        descBox.style.top=window.event.pageY-200+"px";
        if(window.event.pageX/(window.innerWidth)>.5) descBox.style.left="5%";
        else descBox.style.left="50%";
        descText.innerHTML=`${start} — ${end}`;
        descText.innerHTML+="<hr />"+data.desc;
        descBox.style.display="block";
        
    }

    let totalTime=props.max-props.min;
    totalTime=(totalTime/1000/60/60/24)+365;
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
    let titleClass="event-title"
    if(days<=1){
        // For events that take place in a single instant (like one's birth, say) we just default to calling it 
        // one day, and then we make sure to move the event title over a little to clean it up
        days=1;
        titleClass+=" short"
    }
    // How far to the right should this go? Well, how many milliseconds in this startdate from the minimum startdate?
    // for this screen?
    // let left=(new Date(props.data.startDate)-props.min);
    let left=(new Date(props.data.startDate)-startingYear);
    // Now convert it to days
    left=left/1000/60/60/24;
    // and find the percentage of totalTime
    left=(left/totalTime)*100;
    let height=30;    
    let fs="small";
    let style={position:"relative", height:height+"px", left:left+"%",width:days+"%"}
    // Where should the title text go? By default, let's just say it's a bit to the right of the start of the block
    let titleLeft=2+"%";
    // But if the block is too small, we should move it to one of the ends
    // The right end, if the block is on the left-hand side
    if(days<(props.data.title.length) && (days+left)<75) titleLeft=115+"%";
    // Or the left end, if it's over to the right
    else if(days<(props.data.title.length)) titleLeft=(props.data.title.length*-9)+"px";
    let titleStyle={position:"absolute", left:titleLeft, fontSize:fs}
    return(
    <div className="event-block" onClick={(e)=>(showDesc((props.data), e))} style={style}>
       <span className={titleClass} style={titleStyle}>{props.data.title}</span>
    </div>
    );
}
