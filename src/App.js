import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./main";
import Home from "./home";
import Admin from "./admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="inc" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
