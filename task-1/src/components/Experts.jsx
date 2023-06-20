import React from "react";
import laptop from "../assets/img/laptop.png";
export default function Experts(){
    return(
        <div className="max-w-[1240px] my-10 p-2 mx-auto md:grid grid-cols-2 ">
            <div className="col-span-1 md:w-[80%] text-center ">
                <img src={laptop} alt="" className="inline"/>
            </div>
            <div className="  col-span-1 flex flex-col justify-center ">
                <h1 className="text-[#AA6F73] font-bold my-2">Learn from experts</h1>
                <p className="my-2 text-justify">Learn from the best, here you can get to know more about various skills like react, angular, and many more..</p>
                <button className=" inline w-[30%] bg-black text-white p-3 rounded">Get Started</button>
            </div>

        </div>
    )
}