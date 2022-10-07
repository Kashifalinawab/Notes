import React,{useContext, useState} from "react";
import {useNavigate} from "react-router-dom"
import {UserContext} from "../App"


function Home(){
const[txtArea,setTxtArea]=useState([])

    const {noteSave,setNoteSave,setArchiveNote,setDeleteNote}=useContext(UserContext)
    

    const navigate=useNavigate()

    const saveEnt=()=>{setNoteSave((prev)=>[...prev,txtArea]);}

    const archiveEnt=(note)=>{setArchiveNote((prev)=>[...prev,note])}

    const deleteEnt=(note)=>{setDeleteNote((prev)=>[...prev,note])}


    return(
        <div id="mainhome">

    <div id="ulhome">
        <h2 id="h2home" onClick={()=>navigate("/")}>Home</h2>
        <h2 id="h2archive" onClick={()=>navigate("/archives")}>Archive</h2>
        <h2 id="h2delete"onClick={()=>navigate("/delete")}>Delete</h2>
    </div>


<div id="divhome">
    <div id="areaHome">
    <textarea id='txtbox' placeholder="Write your notes" onChange={(e)=>setTxtArea(e.target.value)}></textarea><br/>
    <button id='btnhome'onClick={saveEnt}>Save</button>{" "}{" "}
    </div>
    <div id="bMapHome">
    <h3 id="h3txt">Your Notes</h3>
    <p id="p">If there's a book that you want to read,<br/>
        but it hasn't been written yet,<br/> 
        then you must write it</p>

    {noteSave.map((note)=>{
            return(
                <div id="aMapHome">
                    {note}
                    <br/>
    <button onClick={()=>archiveEnt(note)}>Archive</button>{" "}{" "}
    <button onClick={()=>deleteEnt(note)}>Delete</button>{" "}{" "}

                </div>
            )
        })
    }
    </div>

</div>

        </div>
    )
}

export default Home;