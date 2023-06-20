 import React from "react";
 import Typed from 'react-typed';
 export default function Banner(){
    return(
        <div className="bg-[#f6e0b5] w-full py-[50px]">
            <div className="max-w-[1240px] mx-auto text-center py-[100px]">
                <div className="text-xl md:text-3xl font-bold md:p-[24px] ">Learn with us!</div>
                <h2 className="text-white font-bold text-5xl md:text-[80px] md:p-[24px]">Grow with us</h2>
                <div className="text-[20px] md:text-[50px] md:p-[24px] text-white font-bold ">Learn 
                <Typed
                className="pl-3"
                    strings={['Web Development', 'React Development']}
                    typeSpeed={120}
                    loop={true}
                    backSpeed={50}
                /></div>
                <button className="bg-black text-white p-3 rounded">Get Started</button>
            </div>
        </div>
    )
 }