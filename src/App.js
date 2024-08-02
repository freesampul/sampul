import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./main";
import Quote from "./components/quotes/quote.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
