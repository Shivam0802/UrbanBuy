import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/HomePage";
import MobilePage from "./Pages/MobilePage";
import FashionPage from "./Pages/FashionPage";
import AssessoriesPage from "./Pages/AssessoriesPage";
import GroceryPage from "./Pages/GroceryPage";
import AppliancePage from "./Pages/AppliancePage";
import SportsPage from "./Pages/SportsPage";
import FurniturePage from "./Pages/FurniturePage";
import CartList from "./Components/CartList";

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const id = useParams();
  console.log(id);    

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="h-[100vh]">
      <Routes>
        <Route path='/' element={<Home darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/mobile' element={<MobilePage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/fashion/:id' element={<FashionPage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/assessories/:id' element={<AssessoriesPage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/grocery' element={<GroceryPage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/appliance/:id' element={<AppliancePage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/sports/:id' element={<SportsPage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/furniture/:id' element={<FurniturePage darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='/cart' element={<CartList darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
