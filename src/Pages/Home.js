import React,{useRef} from "react";
import Products from "../Components/Products";
const Home = () =>{


    const scollToRef = useRef();

    return(
        <>
            <div className="hero py-24 bg-red-100">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg px-2">Eat Pizza your way</h6>
                        <h1 className="text-3xl md:text-6xl font-bold">So fast So yummy</h1>
                        <button className="bg-red-600 py-2 px-6 text-white font-bold rounded-full hover:bg-red-400 mx-20 mt-8" onClick={() => scollToRef.current.scrollIntoView({behavior: 'smooth'})}>Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img src="images/pizza.png" alt= "burger"/>
                    </div>
                </div>
            </div>


            <div className="pb-24" ref={scollToRef}>
                <Products/>

            </div>
        </>
    )
    
}

export default Home;