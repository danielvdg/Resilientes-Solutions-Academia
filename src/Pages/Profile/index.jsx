import { useContext, useEffect, useState } from 'react';
import {Context} from '../../SessionContext';
import Cookies from 'universal-cookie';
import * as S from './style'

export default function Profile(props){
    const { session, handleLogout} = useContext(Context);

    const cookies = new Cookies();

    const [dados, setDados] = useState([])
    console.log(session)

    const getData = async () => {
        if(session.aluno>0){
            const url = 'https://safe-fjord-35975.herokuapp.com/aluno/id/' + session.aluno
            const options = {method:'POST'}
            await fetch(url,options)
            .then(response => response.json())
            .then(data => {
                setDados(data)
                if(data){
                    cookies.set('sessaoAluno', session.aluno, { path: '/' });
                    cookies.set('nomeAluno', data.result.nome, { path: '/'});
                    cookies.set('emailAluno', data.result.email, { path: '/'});
                    cookies.set('senhaAluno', data.result.senha, { path: '/'});
                    cookies.set('cpfAluno', data.result.cpf, { path: '/'});
                    var x = cookies.get('x')
                    if(x!=1){
                        cookies.set('x', 1)
                        window.location.href = "./profile"
                    }
                
                }    
                else
                    window.location.href = "./";
            })
            .catch(error => console.log(error))
        }
        else
            window.location.href = "./";
    }
    
    useEffect(() => {
        getData()
    },[])

    const deleteA = async () => {
        const url = 'https://safe-fjord-35975.herokuapp.com/aluno/id/' + session.aluno
        const options = {method: 'DELETE'}
        await fetch(url,options)
        .catch(error => console.log(error))

        handleLogout()
    }
    var initialValues = {
        "nome":    '',
        "senha":   cookies.get('senhaAluno'),
        "cpf":     cookies.get('cpfAluno'), 
        "email":   ''
    }
    const [values, setValues] = useState(initialValues);
    console.log(values)
    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const updateData = async () => {
        const url = 'https://safe-fjord-35975.herokuapp.com/aluno/id/' + session.aluno
        const options = {
            method:'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'}, 
            body: JSON.stringify(values)
        }
        await fetch(url,options)
        .then(data =>
        {
            if(data){
                window.location.href = "./profile"
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <S.Container>
            <div>
                <S.Titulo>Bem vindo, {cookies.get('nomeAluno')}!</S.Titulo>
                
                <form>
                    <label>Sua informações:</label>
                    <br></br>
                    <label>{cookies.get('nomeAluno')}</label>
                    <input placeholder="Altere seu nome" value={values.nome} onChange={handleInputChange} name="nome"></input>
                    <br></br>
                    <label>{cookies.get('emailAluno')}</label>
                    <input placeholder="Altere seu e-mail" value={values.email} onChange={handleInputChange} name="email"></input>
                    <br></br>
                    <button onClick={updateData}>Alterar dados</button>
                </form>
                <button onClick={deleteA}>Deletar sua conta</button>
                <button onClick={handleLogout}>Deslogar</button>
            </div>

            <div>

            </div>
        </S.Container>
    )
}