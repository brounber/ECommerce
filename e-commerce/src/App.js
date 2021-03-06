import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./components/Card";
import Detail from "./components/Detail";
import style from "./App.module.scss"
import { allData } from "./data/api.js";

function App() {
  return (
    <div className={style.App}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Card/>} />
            {/* <Card  /> */}
          
          <Route exact path="/product/:id" element={<Detail />} />
            {/*  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
