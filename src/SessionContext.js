import React, {createContext, useEffect, useState} from 'react';
import Cookies from 'universal-cookie';

export const Context = createContext();

export default function Session({ children }) {
    const cookies = new Cookies();
 
    var cookieStorage = cookies.get('sessaoAluno');

    const [session, setSession] = useState({ aluno: cookieStorage })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    },[])

    function handleLogin(id){
        setSession({ aluno: id })       
    }

    function handleLogout(){
        cookies.remove('sessaoAluno')
        cookies.remove('x')
        window.location.href = './'
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