import React from "react";
import './Home.css';
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";


const HomeEnt = {

  hidden: {
    opacity : 0,
    x : '-100vw'
  },

  visible : {
    opacity : 1,
    x:0,
    transition:{
      duration:0.8
    }
  },
  exit : {
    x:'100vw',
    transition:{
      ease : 'easeInOut'
    }
  }

}


const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "2px 2px 8px rgb(255,255,255)",
      transition:{
        yoyo:Infinity,
        duration:0.2
      }
    }
    }

const Home = ()=>{

  const navigate = useNavigate();

    return(
        <motion.div className="Home pt-32 lg:grid lg:grid-cols-2  lg:gap-4 lg:pt-40"
        variants={HomeEnt}
        initial='hidden'
        animate='visible'
        exit='exit'
        >

        <div className="cl1 ">
        <p className="title text-5xl text-center pl-5 pr-5 lg:text-7xl lg:pl-28 lg:pr-13 lg:pt-20">it's not just<span> Food</span>, It's an <span>Experience</span>.</p>
        <div className="btns mt-11">
        <motion.button 
        variants={buttonVariants}
        whileHover="hover"
        className="btn1 h-11 w-24  lg:w-32 lg:h-16 lg:mt-20 "
        onClick={()=>{
          navigate('/menu');
        }}
        >View Menu</motion.button>
        </div>
       

       <div className="quotes mt-14 items-center pl-4 pr-4 lg:mt-44 ">
        <img className="chef lg:h-16 lg:w-16"  src="./images/chef2.webp"  alt="chef" />
        <p className="qt">There is no love sincerer than the love of food.</p>
        </div>
        </div>

        <div className="cl2 mt-14 mr-4 ml-4 lg:mr-11">
        <video  autoPlay loop muted>
        <source  src="./images/anim2.mp4" type="video/mp4" />
        </video>
        </div>
    </motion.div>
    );
}

export default Home;
