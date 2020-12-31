import React, {useState, useEffect} from "react";
import API from "../utils/API";
import EventBlock from "../components/EventBlock"
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
        console.log(props);
        if(id) {
            loadEvents(id);
        }
    },[props]);

    function loadEvents(id){
        
        if(props.tagArray){
            API.getEventsByTag({userId:id, tagArray:props.tagArray, private:{$ne:true}})
            .then(res=>{
                if(res.status===200){
                    setEvents(res.data);
                    // Sort the array by start dates to find the first date in the series, and make it a Date object, min
                    let minD=new Date(res.data.sort((a, b)=>{let d1=new Date(a.startDate); let d2=new Date(b.startDate); return d1-d2})[0].startDate.substring(0,10));
                    // If anything in this list has a null endDate, then it is ongoing. Which means that the max date is 
                    // today.
                    let maxD;
                    let thereIsAtLeastOneOngoingDate=false;
                    for(const elem of res.data){
                        if(!elem.endDate) {
                            console.log("ongoin'");
                            maxD=new Date();
                            thereIsAtLeastOneOngoingDate=true;
                        }
                    }
                    if(thereIsAtLeastOneOngoingDate===false){
                        // Sort the array by end dates to find the last date in the series, and make it a Date object, max
                        let maxA=res.data.sort((a,b)=>{let d1=new Date(a.endDate); let d2=new Date(b.endDate); return d2-d1});
                        maxD=new Date(maxA[0].endDate.substring(0,10))
                    }
                    setMin(minD);
                    setMax(maxD);
                }
                else console.error(res);
            })
        }
    }
    
    let heightScale=.25;
    let totalHeight;
    if(max>0)totalHeight=((max-min)/1000/60/60/24);    
    let style={height:totalHeight+"px"}
    // if(ORIENTATION==="h") style="";
    return(
        <div className="container-fluid timeline-container">
            {events.map((elem, index)=>(
                <EventBlock key={elem._id} data={elem} min={min} max={max} heightScale={heightScale} index={index}/>
            ))}
        </div>
    )
}