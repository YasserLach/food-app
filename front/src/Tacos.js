import React from "react";
import './Tacos.css';


const Tacos = ()=>{


    return (
        <div className="Tacos lg:grid lg:grid-cols-3 lg:gap-6" >

        <div className="card m-9  rounded-md overflow-hidden shadow-lg lg:mr-6">
        <img className="object-cover w-full h-64 lg:h-max " src="/images/tcsDinde.jpg" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Tacos Dinde</p>
        <p className="sttl pl-4 pb-2 text-sm">Dinde, 2 sauces au choix, Fromage, Frites</p>

        <div className="badge">
            <p >25DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max" src="/images/TacosKefta.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Tacos Viande hachée</p>
        <p className="sttl pl-4 pb-2 text-sm">Viande hachée, 2 sauces au choix, Fromage, Frites</p>
        <div className="badge">
            <p >25DH</p>
        </div>
            
       
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max " src="/images/Tacosnuggets.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Tacos Nuggets</p>
        <p className="sttl pl-4 pb-2 text-sm">Nuggets, 2 sauces au choix, Fromage, Frites</p>
        <div className="badge">
            <p >27DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/Tacosnuggets.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Tacos Escalope</p>
        <p className="sttl pl-4 pb-2 text-sm">Escalope, 2 sauces au choix, Fromage, Frites</p>
        <div className="badge">
            <p >27DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max"  src="/images/Tacosmixte.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Tacos Mixte</p>
        <p className="sttl pl-4 pb-2 text-sm">3 viandes au choix, 2 sauces au choix, Fromage, Frites</p>
        <div className="badge">
            <p >30DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/TacosSpec.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Spécial Foody</p>
        <p className="sttl pl-4 pb-2 text-sm">3 viandes au choix, 3 sauces au choix, Fromage jombon, Frites, Mozzarella</p>
        <div className="badge">
            <p >40DH</p>
        </div>
        </div>

        </div>

    );
}


export default Tacos;