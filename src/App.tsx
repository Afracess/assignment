import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
// import { router } from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import Cardlist from "./Component/Cardlist";
import Home from "./Component/Home";
import Preview from "./Component/Preview";
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="home" element={<Home />} >
          <Route path="preview/:id" element={<Preview />} />
          <Route path="cardlist" element={<Cardlist/>} />
        </Route>

      </Route>
  ),
);

function App() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;