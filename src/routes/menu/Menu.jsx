import { useContext } from "react"
import { MenusContext } from "../../context/MenuContext"
import MenuCard from "../../components/Menu Card/MenuCard"
import "./menu.css"

export const Menu = () => {
    const { menus } = useContext(MenusContext)
  return (
    <div className="products-container">
    {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
    ))}    
    </div>
  )
}

