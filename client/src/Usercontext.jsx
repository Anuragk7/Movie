import { createContext, useState } from "react";

export const  Usercontext = createContext({});

export  function UserContextProvider({children}) {
    const[username, setUsername] = useState(null);
    const [id,setid] = useState(null);
    return (
        <Usercontext.Provider value = {{username, setUsername,id,setid}}>
             {children}
        </Usercontext.Provider>
    )
}