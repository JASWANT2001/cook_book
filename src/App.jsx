import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Menu from "./Menu";
import Home from "./Home";
import "./App.css";
import FileUploadForm from "./FileUploadForm";


function App() {
  return (
    <>
      <div className="bl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/create" element={<Create />} /> */}
            <Route path="/create" element={<FileUploadForm/>} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
