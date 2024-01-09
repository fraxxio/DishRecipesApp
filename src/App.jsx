import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import DishDetails from "./pages/DishDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<DishDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Footer />
    </QueryClientProvider>
  );
}

export default App;

// TODO
// add dish details page
// add pagination in url
// fix browser going back buttons not working as expected
// make tags be selected if the tag is in the url param also
