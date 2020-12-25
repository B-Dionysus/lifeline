import React, {useState, useEffect} from "react";
import API from "../utils/API";
import EventBlock from "../components/EventBlock"
import "./timeline.css"
export default function Timeline(props){
    const [events, setEvents] = useState([]);
    let id=props.id;
    useEffect(()=>{
        id=props.id;
        if(id) {
            loadEvents(id);
        }
    },[id]);

    function loadEvents(id){
        // Load everything that isn't private (the backend also filters out the archived events)
        API.getEvents({userId:id, private:{$ne:true}})
        .then(res=>{
            if(res.status===200){
                setEvents(res.data);
            }
            else console.error(res);
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-2 tag-filter-bar">
                    Tags go here, ID={id}
                </div>
                <div className="col-10 timeline">
                    {events.map(elem=>(
                        <EventBlock key={elem._id} data={elem} />
                    ))}
                </div>
            </div>
        </div>
    )
}