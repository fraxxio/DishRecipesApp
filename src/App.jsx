import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";

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
