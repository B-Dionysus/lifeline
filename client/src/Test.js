import React, {useState, useEffect} from "react";
import API from "./utils/API";


export default function Test(){
    const [events, setEvents] = useState([]);

    useEffect(() => {        
        loadEvents()
    }, [])

    function loadEvents() {
        API.getEvents()
        .then(res => {
            setEvents(res.data);
        })
        .catch(err => console.log(err));
    };

    return(
        <>
            {events.map((event, index)=>(
               <div key={index}> {event.briefTitle}</div>
            ))
            }
        </>
    );
}
