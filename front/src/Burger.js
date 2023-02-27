import React from "react";





const Burger = ()=>{


    return (
        <div className="Tacos lg:grid lg:grid-cols-3 lg:gap-6" >

        <div className="card m-9  rounded-md overflow-hidden shadow-lg lg:mr-6">
        <img className="object-cover w-full h-64 lg:h-max " src="/images/beefburg.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Beef Burger</p>
        <p className="sttl pl-4 pb-2 text-sm">Beef, Onion, Tomato, Pickle, Lettuce, Mustard</p>

        <div className="badge">
            <p >50DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max" src="/images/chsburg.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Cheese Burger</p>
        <p className="sttl pl-4 pb-2 text-sm">Beef, Onion, Tomato, Pickle, Lettuce, Cheese</p>
        <div className="badge">
            <p >35DH</p>
        </div>
            
       
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max " src="/images/marshburg.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Creamy Mushroom</p>
        <p className="sttl pl-4 pb-2 text-sm">Beef, Onion, Tomato, Pickle, Mushroom, Mayo</p>
        <div className="badge">
            <p >40DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/bufburg.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Spicy Buffalo</p>
        <p className="sttl pl-4 pb-2 text-sm">Chiken, Onion, Tomato, Pickle, Chili Pepper</p>
        <div className="badge">
            <p >40DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img  className="object-cover w-full h-64 lg:h-max"  src="/images/bbqburg.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Barbeque Burger </p>
        <p className="sttl pl-4 pb-2 text-sm">Beef, Onion, Tomato, Pickle, BBQ Sauce</p>
        <div className="badge">
            <p >60DH</p>
        </div>
        </div>

        <div className="card m-9 rounded-md overflow-hidden shadow-md lg:mr-6">   
        <img className="object-cover w-full h-64 lg:h-max" src="/images/hawburg.png" alt="tacos" />
        <p className="ttl pt-4 pl-4 text-md font-bold">Hawaiin Burger</p>
        <p className="sttl pl-4 pb-2 text-sm">Pineapple, Onion, Tomato, Pickle</p>
        <div className="badge">
            <p >45DH</p>
        </div>
        </div>

        </div>

    );
}


export default Burger;