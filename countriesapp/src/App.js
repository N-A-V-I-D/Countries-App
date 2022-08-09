import { Routes, Router, Link , Route , Switch} from "react-router-dom";

import './App.css';
import Second from './Second'

import App2 from './App2'

function App() {
  return (
        <Routes >
        <Route path="/" element={<App2 />} />
        <Route path="/results" element={<Second />}/>
        </Routes>

  );
}

export default App;

