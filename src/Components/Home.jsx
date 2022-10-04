import React,{useContext, useState} from "react";
import {useNavigate} from "react-router-dom"
import {UserContext} from "../App"


function Home(){
const[txtArea,setTxtArea]=useState([])

    const {noteSave,setNoteSave,archiveNote,setArchiveNote,deleteNote,setDeleteNote}=useContext(UserContext)
    // console.log(noteSave,setNoteSave,archiveNote,setArchiveNote,deleteNote,setDeleteNote);

    // const{noteSave,setNoteSave}=useContext(UserContext)
    // console.log(setArchiveNote);


    const navigate=useNavigate()

    const saveEnt=()=>{setNoteSave((prev)=>[...prev,txtArea]);}

    const deleteEnt=()=>{console.log("delte");}


    return(
        <div>
<nav>
    <ul>
        <li onClick={()=>navigate("/")}>Home</li>
        <li onClick={()=>navigate("/archive")}>Archive</li>
        <li onClick={()=>navigate("/delete")}>Delete</li>
    </ul>
</nav>

<div>
    <textarea placeholder="Write your notes" onChange={(e)=>setTxtArea(e.target.value)}></textarea><br/>
    <button onClick={saveEnt}>Save</button>{" "}{" "}
    {noteSave.map((note)=>{
            return(
                <div>
                    {note}
                    <br/>
    <button onClick={()=>{setArchiveNote([note])}}>Archive</button>{" "}{" "}
    <button onClick={deleteEnt}>Delete</button>{" "}{" "}

                </div>
            )
        })
    }

</div>
<div>
    <h3>Your Notes</h3>
    <p>{noteSave}</p>
    </div>

        </div>
    )
}

export default Home;