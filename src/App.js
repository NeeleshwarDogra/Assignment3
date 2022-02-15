import Register from "./components/register";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Recipes from "./components/recipes";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} element = {<Register />} ></Route>
          <Route path={"/home"} element = {<Recipes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
