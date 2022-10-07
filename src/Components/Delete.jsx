import React,{useContext} from "react";
import {UserContext} from "../App"




function Delete(){

    const {deleteNote}=useContext(UserContext)



    return(
        <div id="maindelete">
            <h1>Deteled Area</h1>

            {deleteNote.map((note)=>{
            return(
                <div id="mapdelete">
                    {note}
                    <br/>
  
                </div>
            )
        })
    }


        </div>
    )
}
export default Delete;