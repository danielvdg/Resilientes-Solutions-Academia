import { useContext, useEffect } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import {Context} from '../../SessionContext';


export default function Profile(props){
    const { session, handleLogout } = useContext(Context);
    const history = useHistory();

    if(session.aluno>0){

        const url = 'https://safe-fjord-35975.herokuapp.com/aluno/id' + session.aluno
        const options = {method:'GET'}
        const getAluno = fetch(url,options)
        .then(response => response.json)
        .catch(error => console.log(error))
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