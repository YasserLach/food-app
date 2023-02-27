import React from "react";


const Pizza = ()=>{


    return (
        <div className="Pizza lg:grid lg:grid-cols-3 lg:gap-6" >

        <div className="card m-9  rounded-md overflow-hidden shadow-lg lg:mr-6">
        <img className="object-cover w-full h-64 lg:h-max " src="/images/pM.jpg" alt="pizza" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Margherita</p>
        <p className="sttl pl-4 pb-2 text-sm">Mozzarella, Sauce Tomate aux herbes</p>

        <div className="badge">
            <p >40DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max" src="/images/pizzathon.jpg" alt="pizza" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Marina</p>
        <p className="sttl pl-4 pb-2 text-sm">Thon, Olives Noires, Dés de tomate, Oignons, Mozzarella, Sauce Tomate aux herbes </p>
        <div className="badge">
            <p >25DH</p>
        </div>
            
       
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max " src="/images/pizzaViandeH.png" alt="pizza" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Beefy</p>
        <p className="sttl pl-4 pb-2 text-sm">Viande hachée, Champignons, Tomates Fraiches, Mozzarella, Sauce Tomate aux herbes  </p>
        <div className="badge">
            <p >27DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/pizzaHot.png" alt="pizza" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Spicy Hot (Boeuf ou Poulet)</p>
        <p className="sttl pl-4 pb-2 text-sm">Viande hachée (Boeuf ou Poulet), Piments Verts, Tomates Fraiches, Oignons, Mozzarella  </p>
        <div className="badge">
            <p >27DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max"  src="/images/bbq.png" alt="pizza" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Poulet Sauce BBQ</p>
        <p className="sttl pl-4 pb-2 text-sm">Poulet grillé et sauce Barbecue, Oignons, Poivrons verts à Mozzarella</p>
        <div className="badge">
            <p >30DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/pVeg.png" alt="pizza" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Végétarienne</p>
        <p className="sttl pl-4 pb-2 text-sm">Champignons, Poivrons verts, Oignons, Tomates Fraiches, Olives Noires, Mozzarella, Sauce Tomate aux herbes  </p>
        <div className="badge">
            <p >40DH</p>
        </div>
        </div>

        </div>

    );
}


export default Pizza;