import {useEffect, useState} from 'react';
import * as S from "../Cadastro/style";
export default function Form(props) {

    var initialValues = {
        "nome":    '',
        "senha":   '',
        "cpf":     '', 
        "email":   ''
    }

    const [values, setValues] = useState(initialValues);
    //const [posted, setPosted] = useState(false)

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
        //.then(data => setPosted(true))
        .catch(error => console.log(error))

    }

    return(
        <form>
            <S.Input value={values.nome} onChange={handleInputChange} name="nome" label="nome" placeholder="Nome"/>

            <S.Input value={values.senha} onChange={handleInputChange} name="senha" label="senha" placeholder="Senha"/>

            <S.Input value={values.cpf} onChange={handleInputChange} name="cpf" label="nome" placeholder="CPF"/>
            
            <S.Input value={values.email} onChange={handleInputChange} name="email" label="nome" placeholder="E-mail"/>

            <button onClick={submit}>Cadastrar</button>
        </form>   
    )
}