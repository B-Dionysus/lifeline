import axios from "axios";
export default{
    getEvents: function(id){
        return axios.post("/api/events", id);
    },
    getTags: function(id){
        return axios.post("/api/tags", id);
    },
    createEvent:function(event){
        return axios.post("api/events/create", event)
    },
    updateTags:function(tags){
        return axios.post("api/events/updateTags", tags);
    }
};