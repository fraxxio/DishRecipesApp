import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Error from "./components/Error";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
