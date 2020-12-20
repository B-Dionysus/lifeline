import axios from "axios";
export default{
    getEvents: function(){
        return axios.get("/api/events");
    },
    createEvent:function(event){
        return axios.post("api/events/create", event)
    }
};