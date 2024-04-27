import { MoreVertical, Equal, EqualNot } from "lucide-react"
import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children, setExpanded2 }) {
  const [expanded, setExpanded] = useState(true)


  const toggleExpanded = () => {
    setExpanded(!expanded); // Inverte o valor de 'expanded'
    setExpanded2(!expanded)
  };


  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r rounded-r-md shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className={`rubik-ph ${expanded ? "w-32" : "hidden"}`}>DEBITUS</span>
          <button
            onClick={toggleExpanded}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? < EqualNot/> : <Equal />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Caio&background=c7d2fe&color=fff&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Caio</h4>
              <span className="text-xs text-gray-600">Caio@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
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