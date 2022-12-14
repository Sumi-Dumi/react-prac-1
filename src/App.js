import Home from "./routes/Home";
import Main from "./routes/Main";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
       <Route path="/main" element={<Main />}/>
    </Routes>
  );
}

export default App;
