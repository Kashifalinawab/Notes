import React,{useContext} from "react";
import {useNavigate} from "react-router-dom"
import {UserContext} from "../App"




function Delete(){
    const navigate=useNavigate()

    const {noteSave,setNoteSave,archiveNote,setArchiveNote,deleteNote,setDeleteNote}=useContext(UserContext)



    return(
        <div>
            <h4 onClick={()=>navigate("/")}>Home</h4>
            <h1>Deteled Area</h1>
        </div>
    )
}
export default Delete;