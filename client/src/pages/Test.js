import React, {useState, useEffect} from "react";
import API from "../utils/API";
import NavBar from "../components/NavBar";

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
        
      <NavBar />
            {events.map((event, index)=>(
               <div key={index}> {event.briefTitle}</div>
            ))
            }
        </>
    );
}
