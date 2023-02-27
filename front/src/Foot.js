import React from "react";
import './Foot.css';
import {motion} from "framer-motion";
import {FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa';
import {MdOutlineMarkEmailUnread,MdLocalPhone} from 'react-icons/md';


    const FootAnim = {
        hidden : {
            y : '100vw',
            opacity : 0
        },
        visible : {
            y: 0 ,
            opacity : 1,

            transition : {
                delay: 0.3,
                type:'spring',
                stiffness:120
            }
        }
    }


const Foot = ()=>{
    return (

        <motion.div className="Foot mt-44  md:grid md:grid-cols-4 md:mt-24 "
        variants={FootAnim}
        initial="hidden"
        animate="visible"
        
        >

        <div className="ft1 pl-3.5 pr-3.5">
        <p className="fooTiltle text-3xl md:text-2xl ">F<span>oo</span>dy</p>
        <p className="fSubT  pl-4 pr-4 text-sm md:text-sm pt-4 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p> 
        </div>
        <div className="ft2 pl-3.5 pr-3.5">
        <p className="fooTiltle text-3xl md:text-2xl">Support</p>
        <p className="fSubT  pl-4 pr-4 text-sm md:text-sm pt-4">Privacy Policy</p>
        <p className="fSubT  pl-4 pr-4 text-sm md:text-sm pt-2">Terms of use</p>
        <p className="fSubT  pl-4 pr-4 text-sm md:text-sm pt-2 pb-4">FAQs</p>
        </div>
        <div className="ft3">
        <p className="fooTiltle text-3xl md:text-2xl">Contact</p>
        <p className="fSubT  pl-4 pr-4 flex text-sm md:text-sm pt-4"><MdOutlineMarkEmailUnread className="icons"/>Foody01@gmail.com</p>
        <p className="fSubT  pl-4 pr-4 flex text-sm md:text-sm pt-2 "><MdLocalPhone className="icons"  />+212 619191919</p>
        <p className="fSubT  pl-4 pr-4 flex text-sm md:text-sm pt-2 pb-4"><MdLocalPhone className="icons"/>+212 58798564</p>
        </div>
        <div className="ft4">
        <p className="fooTiltle text-3xl md:text-2xl">Follow Us On</p>
            <p className="fSubT   pl-4 pr-4 flex text-sm md:text-sm pt-4"><FaFacebook className="icons"/>Foody</p>
            <p className="fSubT   pl-4 pr-4 flex text-sm md:text-sm pt-2"><FaTwitter className="icons"/>   foodyRestau</p>
            <p className="fSubT  pl-4 pr-4 flex text-sm md:text-sm pt-2 pb-4"><FaInstagram className="icons"/> foody.Restau</p>
        </div>

        </motion.div>
    );
}

export default Foot;