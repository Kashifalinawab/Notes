import React,{useContext} from "react";
import {UserContext} from "../App"


function Archives(){

    const {archiveNote}=useContext(UserContext)

    return(
        <div id="mainarchives">
            <h1>Archive Area</h1>

            {archiveNote.map((note)=>{
            return(
                <div id="maparchives">
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