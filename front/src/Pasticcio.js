import React from "react";




const Pasticcio = ()=>{


    return (
        <div className="Pasticcio lg:grid lg:grid-cols-3 lg:gap-6" >

        <div className="card m-9  rounded-md overflow-hidden shadow-lg lg:mr-6">
        <img className="object-cover w-full h-64 lg:h-max " src="/images/pstchioP.jpg" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Pasticcio Poulet</p>
        <p className="sttl pl-4 pb-2 text-sm">Dinde, 2 sauces au choix, Fromage, Frites</p>

        <div className="badge">
            <p >25DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max" src="/images/pstchioP.jpg" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Pasticcio Viande hachée</p>
        <p className="sttl pl-4 pb-2 text-sm">Viande hachée, 2 sauces au choix, Fromage, Frites</p>
        <div className="badge">
            <p >30DH</p>
        </div>
            
       
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max " src="/images/pstchioP.jpg" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Pasticcio Mixte</p>
        <p className="sttl pl-4 pb-2 text-sm">Nuggets, 2 sauces au choix, Fromage, Frites</p>
        <div className="badge">
            <p >40DH</p>
        </div>
        </div>


       </div>

    );
}


export default Pasticcio;