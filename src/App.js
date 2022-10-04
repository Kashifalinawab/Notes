import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Archives from "./Components/Archives";
import Delete from "./Components/Delete";

export const UserContext = createContext();
function App() {
  const [noteSave, setNoteSave] = useState([]);
  const [archiveNote, setArchiveNote] = useState([]);
  const [deleteNote, setDeleteNote] = useState([]);

  return (
    <div>
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
