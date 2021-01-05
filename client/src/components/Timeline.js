import React, {useState, useEffect} from "react";
import API from "../utils/API";
import EventBlock from "../components/EventBlock"
import DateBlock from "../components/DateBlock"
import "../css/events.css"
export default function Timeline(props){
    const [min, setMin] = useState();
    const [max, setMax] = useState();
    const [events, setEvents] = useState([]);
    let id=props.id;
    let tagArray=props.tagArray;
    // console.log(tagArray);
    useEffect(()=>{
        id=props.id;
        if(id) {
            loadEvents(id);
        }
    },[props]);
    function closeDesc(){
        document.getElementById("description-box").style.display="none";
    }
    function loadEvents(id){
        
        if(props.tagArray){
            API.getEventsByTag({userId:id, tagArray:props.tagArray, private:{$ne:true}})
            .then(res=>{
                if(res.status===200){
                    setEvents(res.data);
                    // Make a new temp array for all of the sorting we need to do.
                    let temp=[...res.data];
                    // Sort the array by start dates to find the first date in the series, and make it a Date object, min
                    let minD=new Date(temp.sort((a, b)=>{let d1=new Date(a.startDate); let d2=new Date(b.startDate); return d1-d2})[0].startDate.substring(0,10));
                    // If anything in this list has a null endDate, then it is ongoing. Which means that the max date is 
                    // today.
                    let maxD;
                    let thereIsAtLeastOneOngoingDate=false;
                    for(const elem of temp){
                        if(!elem.endDate) {
                            maxD=new Date();
                            thereIsAtLeastOneOngoingDate=true;
                        }
                    }
                    if(thereIsAtLeastOneOngoingDate===false){
                        // Sort the array by end dates to find the last date in the series, and make it a Date object, max
                        let maxA=temp.sort((a,b)=>{let d1=new Date(a.endDate); let d2=new Date(b.endDate); return d2-d1});
                        maxD=new Date(maxA[0].endDate.substring(0,10))
                    }
                    setMin(minD);
                    setMax(maxD);
                }
                else console.error(res);
            })
        }
    }
    
    for(let elem of events){
        // console.log(elem.title);
        // console.log(elem.howManyDays);
        // console.log("====");
    }
    let heightScale=.25;  
    return(
        <div className="container-fluid timeline-container">
            <div className="row">
                <div className="col-12 dates">
                {events.map((elem, index)=>(
                    <DateBlock key={elem._id} data={elem} min={min} max={max} prev={index>0 && events[index-1].startDate}/>
                ))}
                </div>
            </div>
            <div className="row">   
                <div className="col-12">
                {events.map((elem, index)=>(
                    <EventBlock key={elem._id} data={elem} min={min} max={max} heightScale={heightScale} index={index}/>
                ))}
                </div>
            </div>            
            <div className="description" id="description-box">
                <div className="desc-box-header">
                    <span id="desc-title"></span>
                <i onClick={closeDesc} className="fas fa-window-close"></i>
                </div>
                <div id="desc-box-body"></div>
            </div>
        </div>
    )
}