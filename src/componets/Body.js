import React, {useState} from "react";
import Menu from "./Menu";

export default function Body({ children }){
    const [expanded, setExpanded] = useState(true)


    return(
        <>
        <div className={expanded ? 'col-span-2' : 'col-end-1'}><Menu setExpanded={setExpanded}></Menu></div> 
        <div className={` p-10 ${expanded ? 'col-span-8' : 'col-span-10'}`}>{children}</div> 
        </>

    )
}