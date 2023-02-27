import React from "react";
import './NavBar.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const NavAnim = {
    hidden : {
        y : '-100vw', 
        opacity : 0
    },
    visible : {
        y:'0vw',
        opacity : 1,
        transition : {
            duration:1.2,
            delay : 0.5,
            type :'spring' , 
            stiffness:500
        }
    }
    }
    
    const hoverLink = {
    hover : {
        scale : 1.1,
    }
    
    }
    

    const menu = document.querySelector('#menu');







const NavBar = ()=>{
    return(
        <motion.div className="NavBar sm:flex sm:justify-between sm:items-center sm:pt-9" 
    variants={NavAnim}
    initial = "hidden"
    animate = "visible"
    >
        <p className="flex justify-between items-center pl-7 pt-7  text-4xl  sm:text-7xl sm:pl-9 ">
            <div>
            F<span>oo</span>dy
            </div>
            
    <div className="sm:hidden pl-5 pr-9  cursor-pointer " id="burger">
    <svg className="w-7" xmlns="http://www.w3.org/2000/svg" 
    onClick={()=>{
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
          }else {
            menu.classList.add('hidden');
          }
    }}
    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</div>

    </p>
        
    
   
    <ul className=" hidden text-center pt-6  sm:flex sm:justify-between "  id='menu'>
        <motion.li className="text-2xl pb-4 cursor-pointer sm:hover:border-b-2 sm:text-2xl sm:mr-8 "
        variants={hoverLink}
        whileHover = "hover"
        ><Link to="/">Home</Link></motion.li>
        <motion.li className="text-2xl pb-4 cursor-pointer sm:hover:border-b-2 sm:text-2xl sm:mr-8"
        variants={hoverLink}
        whileHover = "hover"
        > <Link to="/menu">Menu</Link>  </motion.li>
        <motion.li className="text-2xl pb-4 cursor-pointer sm:hover:border-b-2 sm:text-2xl sm:mr-8"
        variants={hoverLink}
        whileHover = "hover"
        > <Link to="/about"> About Us </Link>  </motion.li>
    </ul>

    </motion.div>
    );
}

export default NavBar;