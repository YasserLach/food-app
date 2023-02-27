import React from "react";





const Plats = ()=>{


    return (
        <div className="Plats lg:grid lg:grid-cols-3 lg:gap-6" >

        <div className="card m-9  rounded-md overflow-hidden shadow-lg lg:mr-6">
        <img className="object-cover w-full h-64 lg:h-max " src="/images/placurry.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Plats Curry</p>
        <p className="sttl pl-4 pb-2 text-sm">Poulet Curry accompagné de frites, Riz Cantonais, Salade Composée</p>

        <div className="badge">
            <p >35DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max" src="/images/plaes.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Plats Escalope</p>
        <p className="sttl pl-4 pb-2 text-sm">3 Escalopes panées, Accompagnés de frites, Riz Cantonais, Salade Composée</p>
        <div className="badge">
            <p >35DH</p>
        </div>
            
       
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max " src="/images/plakfta.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Plats Kefta</p>
        <p className="sttl pl-4 pb-2 text-sm">2 Steaks Hachés accompagnés de frites, Riz cantonais, Salade composée</p>
        <div className="badge">
            <p >35DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/plamixte.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Plats Mixte</p>
        <p className="sttl pl-4 pb-2 text-sm">1 Steak Haché, Poulet Curry, 1 Pièce escalope accompagné de frites, Riz Cantonais, Salade Composée</p>
        <div className="badge">
            <p >40DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max"  src="/images/plapoul.jpg" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Poulet Rôti</p>
        <p className="sttl pl-4 pb-2 text-sm">Poulet Rôti accompagné de frites, Riz cantonais, Salade composée</p>
        <div className="badge">
            <p >50DH</p>
        </div>
        </div>

        </div>

    );
}


export default Plats;