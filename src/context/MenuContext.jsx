import { createContext, useState } from "react";
import MENUS from '../menu-data.json'

export const MenusContext = createContext({
    menus: [],
})

export const MenusProvider = ( { children } ) => {
    const [menus, setMenus] = useState(MENUS);
    const value = { menus }

    return(
        <MenusContext.Provider value={value}>{children}</MenusContext.Provider>
    )
}
    
