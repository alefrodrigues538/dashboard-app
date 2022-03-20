import React, { createContext, useState } from 'react';

//Tipagem dos dados
type headerContextState = {
    headerTitle: string;
    set_HeaderTitle: (title:string) => void;
}

//Valores iniciais
const defaultvalues: headerContextState = {
    headerTitle: 'Dashboard title',
    set_HeaderTitle: () => {}
}

//Context
export const HeaderContext = createContext<headerContextState>(defaultvalues)

//Context Provider
const HeaderContextProvider: React.FC = ({children}) => {
    const [headerTitle, setHeaderTitle] = useState<string>(defaultvalues.headerTitle)

    const set_HeaderTitle=(title: string)=> setHeaderTitle(title)

  return (
      <HeaderContext.Provider value={{
        headerTitle, set_HeaderTitle
      }}>
          {children}
      </HeaderContext.Provider>
  );
}

export default HeaderContextProvider;