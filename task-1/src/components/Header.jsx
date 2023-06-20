import React, { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import About from "./About";
export default function Header(){
    const [toggle, setToggle]= useState(false);
    return(
        <div className="bg-[#AA6F73] p-4">
            <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
            <div className='text-3xl font-bold;'>
                Palki Nanda
            </div>
            {
                toggle ?
                <AiOutlineClose onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block "/> 
                :
                <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>

            } 
            <ul className="hidden md:flex text-white gap-10">
                <a href={About}><li>About Us</li></a>
                <li>Contact Us</li>
                <li><a href="/Login">Login</a></li>
            </ul>
            <ul className={'duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] left-[-100%] '}>
                <li className="p-5">About Us</li>
                <li className="p-5">Contact Us</li>
                <li className="p-5">Login</li>
            </ul>
            </div>
        </div>
    )
}