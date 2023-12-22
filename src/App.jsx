import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
