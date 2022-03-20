import React from 'react';

import SidebarContextProvider  from './sidebarContext'
import HeaderContextProvider from './headerContext';

const GlobalContext:React.FC = ({children}) => {
    return (
        <SidebarContextProvider>
            <HeaderContextProvider>
                {children}
            </HeaderContextProvider>
        </SidebarContextProvider>
    )

}

export default GlobalContext;