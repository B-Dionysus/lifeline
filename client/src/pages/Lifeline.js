import React, {useContext} from "react";
import Timeline from "../components/Timeline";
import AuthContext from "../context/auth/authContext";

export default function Lifeline(){
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    return(
        <Timeline id={user && user._id} />
    )
}