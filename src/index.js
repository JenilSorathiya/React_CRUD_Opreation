import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {} from "react-router-dom";
import Form from "./Form";

import Faculty from "./Faculty";
import FacultyDetail from "./FacultyDetail";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/faculty" element={<Faculty />}></Route>
        <Route path="/faculty/:id" element={<FacultyDetail />}></Route>
        <Route path="/Form/:id" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Form/> */}
  </StrictMode>
);
