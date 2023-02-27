import react from "react";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Foot from "./Foot";
import { Route ,Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Tacos from "./Tacos";
import Pizza from "./Pizza";
import Pasticcio from "./Pasticcio";
import Burger from "./Burger";
import Plats from "./Plats";





const App =()=>{

    const location = useLocation();

return(

<div className="App m-12 md:m-24">
    
    <NavBar />
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.key}>
    <Route path="/" element={<Home />} />
    <Route  path="/menu" element={<Menu />} >
    <Route  path="" index  element={<Tacos />}/>
    <Route  path="tacos"   element={<Tacos />}/>
    <Route  path="pizza" element={<Pizza />}/>
    <Route  path="pasticcio" element={<Pasticcio />}/>
    <Route  path="burger" element={<Burger />}/>
    <Route  path="plats" element={<Plats />}/>
    </Route>
    </Routes>
    </AnimatePresence>

    <Foot />
   


    </div>

);
}

export default App;
