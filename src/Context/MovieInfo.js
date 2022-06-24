import React, { useContext } from "react";


const MoreInfoContext = React.createContext()

function MoreInfoContextProvider({children}){

    return(
        <MoreInfoContext.Provider>
            {children}
        </MoreInfoContext.Provider>
    )
}

export function useMoreInfo(){
    return useContext(MoreInfoContext)
}