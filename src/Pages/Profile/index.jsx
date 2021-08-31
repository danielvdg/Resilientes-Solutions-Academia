import { useState,useEffect,useContext} from "react";
import {Context} from '../../SessionContext';

export default function Profile(props){
    const { session, handleLogout} = useContext(Context);

    return(
        <main>
            <h1>VOCÊ ESTÁ LOGADO</h1>
        </main>
    )
}