import React from "react";
import { Outlet } from "react-router-dom";
import './Menu.css';
import { Link } from "react-router-dom";
import {motion} from "framer-motion";


const menuEnt = {

    hidden : {
        opacity : 0,
        x : '-100vw'
    },
    visible : {
        opacity : 1,
        x : 0,
        trasition : {
            duration:0.8
        }
    },
    exit : {
        x:'100vw',
        trasition : {ease : 'easeInOut'}
    }

}


const Menu = ()=>{
    return (
        <motion.div className="Menu lg:grid lg:grid-cols-5 lg:gap-4 lg:pt-32 "
             variants={menuEnt}
             initial="hidden"
             animate="visible"
             exit="exit"
        >
            
            <div className="column1 md:ml-9">
                <ul className="pt-20 ml-4 text-2xl flex justify-around flex-wrap  overflow-hidden lg:mt-9 lg:block lg:pt-4 lg:pb-4">
                    
                    <Link to="/menu/tacos"><li className="mnItem mr-4 pr-2 pl-2 mt-9  lg:overflow-hidden  lg:mt-24 lg:text-3xl lg:pb-3 bg-red-500 text-white rounded-md  border-white border-2 pt-2  hover:bg-white hover:text-red-500   hover:border-red-500 hover:border-2 ">Tacos</li></Link>
                    <Link to="/menu/pizza"><li className="mnItem mr-4 pr-2 pl-2 mt-9 lg:overflow-hidden lg:mt-10 lg:text-3xl lg:pb-3 bg-red-500 text-white rounded-md  border-white border-2 pt-2 hover:bg-white hover:text-red-500   hover:border-red-500 hover:border-2">Pizza</li></Link>
                    <Link to="/menu/burger"><li className="mnItem mr-4 pr-2 pl-2 mt-9 lg:overflow-hidden lg:mt-10 lg:text-3xl lg:pb-3 bg-red-500 text-white rounded-md  border-white border-2 pt-2 hover:bg-white hover:text-red-500   hover:border-red-500 hover:border-2">Burger</li></Link>
                    <Link to="/menu/pasticcio"><li className="mnItem  mr-4 pr-2 pl-2 mt-9 lg:overflow-hidden lg:mt-10 lg:text-3xl lg:pb-3 bg-red-500 text-white rounded-md  border-white border-2 pt-2 hover:bg-white hover:text-red-500   hover:border-red-500 hover:border-2">Pasticcio</li></Link>
                    <Link to="/menu/plats"><li className="mnItem  mr-4 pr-2 pl-2 mt-9 lg:overflow-hidden lg:mt-10 lg:text-3xl lg:pb-3 bg-red-500 text-white rounded-md  border-white border-2 pt-2 hover:bg-white hover:text-red-500   hover:border-red-500 hover:border-2">Plats</li></Link>
         
                </ul>
            </div>

                <div className="column2  md:col-span-4"
                variants={menuEnt}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                
               <Outlet />
                
               </div>


        </motion.div>
    );
}

export default Menu;


