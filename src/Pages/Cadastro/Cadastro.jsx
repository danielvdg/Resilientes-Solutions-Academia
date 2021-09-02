import {useEffect, useState} from 'react';
import * as S from "./style";

export default function Form(props) {

    var initialValues = {
        "nome":    '',
        "senha":   '',
        "cpf":     '', 
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

    const submit = async (e) => {
        e.preventDefault();
    
        const urlCadastro = 'https://safe-fjord-35975.herokuapp.com/aluno'
        const options = {
            method: 'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            mode: 'cors',
            cache: 'default', 
            body: JSON.stringify(values)
        }
        await fetch(urlCadastro, options)
        .then(data => 
        {
            if(data)
                window.location.href = "./login"
        })
        .catch(error => console.log(error))
    }

    return(
        <S.Main>
            <S.TextWrapper>
                <S.Text><h2>WORK HARD</h2></S.Text>
                <S.Text><h2>PLAY HARD</h2></S.Text>
            </S.TextWrapper>

            
            <S.Form>
                <S.Label>Matricule-se Já!</S.Label>
                <input value={values.nome} onChange={handleInputChange} name="nome" placeholder="Nome"/>

                <input value={values.senha} onChange={handleInputChange} name="senha" placeholder="Senha"/>

                <input value={values.cpf} onChange={handleInputChange} name="cpf" placeholder="CPF"/>
                
                <input value={values.email} onChange={handleInputChange} name="email" placeholder="E-mail"/>
                <br></br>
                <button onClick={submit}>Cadastrar</button>
            </S.Form>
        </S.Main>      
    )
}