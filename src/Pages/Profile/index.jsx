import { useContext, useEffect } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import {Context} from '../../SessionContext';


export default function Profile(props){
    const { session, handleLogout } = useContext(Context);
    const history = useHistory();

    if(session.aluno>0){

    return(
        <main>
            <h1>TU TA LOGADO IRMAO</h1>
        </main>
    )
    }
    else{
        window.location.href = "http://localhost:3000/";
    }
}