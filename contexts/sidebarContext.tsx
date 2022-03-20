import React,{ createContext,useState } from 'react';

//tipagem dos dados
type sidebarContextState = {
    sidebarTitle: string;
    sidebarCollapsed: boolean;
    set_SidebarTitle: (title: string) => void;
    toggleSidebarCollapsed: () => void;
}

//valores iniciais
const defaultValues : sidebarContextState ={
    sidebarTitle: 'Dashboard',
    sidebarCollapsed: true,
    set_SidebarTitle: () => {},
    toggleSidebarCollapsed: () =>{}
}

//Context
export const SidebarContext = createContext<sidebarContextState>(defaultValues);

//Context Provider
const SidebarContextProvider:React.FC = ({children}) =>{
    const[sidebarTitle, setSidebarTitle] = useState<string>(defaultValues.sidebarTitle)
    const set_SidebarTitle =(title:string) => setSidebarTitle(title)

    const[sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(defaultValues.sidebarCollapsed)
    const toggleSidebarCollapsed = () => setSidebarCollapsed(!sidebarCollapsed)

    return(
        <SidebarContext.Provider value={{
            sidebarTitle, set_SidebarTitle,
            sidebarCollapsed, toggleSidebarCollapsed
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContextProvider;