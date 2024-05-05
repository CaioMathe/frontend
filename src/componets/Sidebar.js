import {  Equal, EqualNot } from "lucide-react"
import { useContext, createContext, useState, useEffect } from "react"
import {  useNavigate } from 'react-router-dom';

const SidebarContext = createContext()

export default function Sidebar({ children, setExpanded2 }) {
  const [expanded, setExpanded] = useState(true)
  useEffect(()=>{
    const meuBotao = document.getElementById('btn_toogle');
    meuBotao.click();
  }, [])

  const toggleExpanded = () => {
    setExpanded(!expanded); 
    setExpanded2(!expanded)
  };


  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r rounded-r-md shadow-sm  ">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className={`rubik-ph ${expanded ? "w-32" : "hidden"}`}>DEBITUS</span>
          <button
          id="btn_toogle"
            onClick={toggleExpanded}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? < EqualNot/> : <Equal />}
          </button>
        </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 flex justify-center flex-col">{children}</ul>
          </SidebarContext.Provider>

   
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, navi }) {
  const { expanded } = useContext(SidebarContext)
  const navigate = useNavigate();


  
  return (
    <li
    onClick={() => navigate(navi)}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr bg-orange-400 to-indigo-100 text-white"
            : "hover:bg-orange-400 hover:text-white text-gray-600 " 
        }
    `}
    >
    {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-orange-600 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-orange-400 text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}