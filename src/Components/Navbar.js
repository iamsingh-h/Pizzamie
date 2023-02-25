import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () =>{

    const {cart} = useContext(CartContext);



    return(
        <>
            <nav className="container mx-auto flex items-center justify-between">
                
                    <Link to="/">
                        <img className="h-28" src="/images/logo.png" alt="logo"/>
                    </Link>
                    <ul className="flex items-center px-28 py-4 space-x-11 justify-end font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li>
                            <Link to="/cart">
                                <div className="bg-red-600 py-1 px-3 rounded-2xl flex">
                                    <span>{cart.totalItems ? cart.totalItems:0}</span>
                                    <img src="images/icon.png" alt="cart-icon"/>
                                </div>
                            </Link>
                        </li>
                    </ul>
                

            </nav>
        </>
    )
}
export default Navbar;