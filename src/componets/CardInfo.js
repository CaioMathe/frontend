import React from "react";



export default function CardInfo({texto, valor, cor, icon}) {
 return(
    <div className="w-1/4 h-32 rounded shadow-lg p-5">
        <div className="flex flex-row justify-between">
            <span className="roboto-thin">{texto} </span>
            {icon}
        </div>
        <div className="flex flex-row justify-between items-end">
            <div className={`w-1 h-14 ${cor}`}></div>
            <span className="roboto-thin text-3xl"> {valor} </span>
        </div>
    </div>
 )
}