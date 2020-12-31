import axios from "axios";
export default{
    getEvents: function(filter){
        return axios.post("/api/events", filter);
    },
    getEventsByTag: function(filter){
        return axios.post("/api/events/tag", filter);
    },
    loadEvent: function(id){
        return axios.get(`api/events/${id}`);
    },
    getTags: function(id){
        return axios.post("/api/tags", id);
    },
    createEvent:function(event){
        return axios.post("api/events/create", event)
    },
    deleteEvent:function(id){
        return axios.post("api/events/delete",id);
    },
    updateTags:function(tags){
        return axios.post("api/events/updateTags", tags);
    }
};