import React, {createContext, useEffect, useState} from 'react';

export const Context = createContext();

export default function Session({ children }) {
    const [session, setSession] = useState({ aluno: 0 })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    },[])

    function handleLogin(id){
        setSession({ aluno: id })       
    }

    function handleLogout(){
        setSession({ aluno: 0 })
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <Context.Provider value={{session, handleLogin, handleLogout}} >
            {children}
        </Context.Provider>
    );
}