import React, {useState} from "react";
import Menu from "./Menu";
import { Bell } from "lucide-react"


export default function Body({ children, titulo }){
    const [expanded, setExpanded] = useState(true)


    return(
        <>
        <div className={expanded ? 'col-span-2' : 'col-end-1'}><Menu setExpanded={setExpanded}></Menu></div> 
        <div className={`  ${expanded ? 'col-span-8' : 'col-span-10'}`}>

        <div className="  h-14 flex justify-around items-center pl-6 pr-6">

            <div className="w-2/5">
                <h1 className="text-2xl">{titulo}</h1>
            </div>


            <div className="flex items-center gap-2 w-3/5 justify-end">



                <div class="relative w-5/12">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-orange-500" placeholder="Pessoa, Contratos, etc..."  />
                </div>

                <Bell color="white" className=" bg-orange-500 rounded-full p-2 w-12 h-8"/>

                <img
                    src="https://ui-avatars.com/api/?name=Caio&background=c7d2fe&color=fff&bold=true"
                    alt=""
                    className="w-10 h-10 rounded-full"
                />
                
            </div>
        </div>




            <div className=" p-5">{children}</div>
        </div> 
        </>

    )
}