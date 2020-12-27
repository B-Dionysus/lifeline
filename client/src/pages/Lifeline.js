import React, {useContext} from "react";
import Timeline from "../components/Timeline";
import AuthContext from "../context/auth/authContext";
import TagList from "../components/TagList";
export default function Lifeline(){
    function addTag(){}
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    return(
        <div className="row">            
            <div className="col-1 tag-filter-bar">
             <TagList addTag={addTag} id={user && user._id} />
            </div>
            <div className="col-11 tag-filter-bar">
                <Timeline id={user && user._id} />
            </div>
        </div>
    )
}