
import React from "react";
import Sidebar from "./Sidebar";
import { SidebarItem } from "./Sidebar";
import { HandCoins, Send, LifeBuoy, LayoutDashboard } from "lucide-react";

export default function Menu({setExpanded}){



    return(
            <Sidebar setExpanded2={setExpanded}>
                <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
                <SidebarItem icon={<HandCoins size={20} />}   text="Financeiro"  />
                <SidebarItem icon={<Send size={20} />} text="Envio"  />
                <hr className="my-3" />
                <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
            </Sidebar>
    )

}
