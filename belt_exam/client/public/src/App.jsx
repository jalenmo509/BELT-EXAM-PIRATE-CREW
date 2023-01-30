import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Error from "./views/Error";
import Create from "./views/Create";

function App() {
  return (
    <div className="App p-8 flex justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="/pirates" />} />
        <Route element={<Main />} path="/pirates" />
        <Route element={<Create />} path="/pirates/new" />
        <Route element={<Detail />} path="/pirates/:id" />
        <Route element={<Error />} path="*" />
      </Routes>
    </div>
  );
}
export default App;
