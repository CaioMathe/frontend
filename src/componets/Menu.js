
import React from "react";
import Sidebar from "./Sidebar";
import { SidebarItem } from "./Sidebar";
import { HandCoins, Send,  LayoutDashboard } from "lucide-react";

export default function Menu({setExpanded}){

    function path(){
        return window.location.pathname
    }

    return(
            <Sidebar setExpanded2={setExpanded}>
                <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard"  active={path()==='/'  ? true : false}  navi={'/'}/>
                <SidebarItem icon={<HandCoins size={20} />}   text="Financeiro" active={path()==='/financeiro'  ? true : false} navi={'/financeiro'} />
                <SidebarItem icon={<Send size={20} />} text="Envio" active={path()==='/envio'  ? true : false} navi={'/envio'} />

            </Sidebar>
    )

}
