import React,{useContext} from "react";
import {useNavigate} from "react-router-dom"
import {UserContext} from "../App"


function Archives(){

    const {noteSave,setNoteSave,archiveNote,setArchiveNote,deleteNote,setDeleteNote}=useContext(UserContext)
    console.log("----");
    console.log(archiveNote);

    const navigate=useNavigate()
    return(
        <div>
            <h4 onClick={()=>navigate("/")}>Home</h4>
            <h1>Archive Area</h1>

            {archiveNote.map((note)=>{
            return(
                <div>
                    {note}
                    <br/>
  
                </div>
            )
        })
    }



        </div>
    )
}
export default Archives;