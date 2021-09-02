import { useContext, useEffect, useState } from 'react';
import {Context} from '../../SessionContext';
import Cookies from 'universal-cookie';
import * as S from './style';
import Button from '../../Components/Button';

export default function Profile(props){
    const { session, handleLogout} = useContext(Context);

    const cookies = new Cookies();

    const [dados, setDados] = useState([]);
    const [treinos, setTreinos] = useState([]);

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
    
    const getDataTreino = async () => {
        const url = 'https://safe-fjord-35975.herokuapp.com/treino/ver';
        const options = {method: 'GET'}
        await fetch(url,options)
        .then(response => response.json())
        .then(data => {
            setTreinos(data)
            if(data){
                localStorage.setItem('treinos', JSON.stringify(data.result));
            }
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
        getDataTreino()
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
            <S.TituloWrapper>
                <S.Titulo>Bem vindo, {cookies.get('nomeAluno')}!</S.Titulo>
            </S.TituloWrapper>
            <S.FormWrapper>   
                <S.Form>
                    <h2>Sua informações:</h2>
                    <br></br>
                    <div>
                        <label>{cookies.get('nomeAluno')}</label>
                        <br></br>
                        <label>{cookies.get('emailAluno')}</label>
                    </div>
                    <div>
                    <S.Input placeholder="Altere seu nome" value={values.nome} onChange={handleInputChange} name="nome"></S.Input>
                    <S.Input placeholder="Altere seu e-mail" value={values.email} onChange={handleInputChange} name="email"></S.Input>
                    </div>
                    
                    <button onClick={deleteA}>Deletar sua conta</button>
                    <button onClick={handleLogout}>Deslogar</button>
                    <button onClick={updateData}>Alterar dados</button>
                </S.Form>
                
            </S.FormWrapper>
        </S.Container>
    )
}

