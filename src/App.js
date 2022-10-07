import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {useNavigate} from "react-router-dom"

import Home from "./Components/Home";
import Archives from "./Components/Archives";
import Delete from "./Components/Delete";
import "./Components/stylesheet.css"
import {TbNotes} from "react-icons/tb"


export const UserContext = createContext();




function App() {

  const navigate=useNavigate()


  const [noteSave, setNoteSave] = useState([]);
  const [archiveNote, setArchiveNote] = useState([]);
  const [deleteNote, setDeleteNote] = useState([]);

  return (
    <div id="mainapp">
                  <h1 id="toph1"><span id="spanhome" onClick={()=>navigate("/")}><TbNotes/></span>Fledge Notes</h1>

      <UserContext.Provider
        value={{
          noteSave,
          setNoteSave,
          archiveNote,
          setArchiveNote,
          deleteNote,
          setDeleteNote,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
