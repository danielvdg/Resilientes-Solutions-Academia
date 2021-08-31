import {useEffect, useState} from 'react';
import * as S from "../Cadastro/style";
export default function Form(props) {

    var initialValues = {
        "nome":    '',
        "senha":   '',
        "cpf":     '', 
        "email":   '',
        "telefone":'',
        "idade":   '',
        "cep":     '',     
        "bairro":  '',   
        "rua":     '',      
        "numero":  ''
    }

    const [values, setValues] = useState(initialValues);
    const [posted, setPosted] = useState(false)

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const submit = async (e) => {
        e.preventDefault();
    
        const urlCadastro = 'https://calm-inlet-01792.herokuapp.com/aluno'
        const options = {
            method: 'POST',
            mode: 'cors',
            //headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }
        await fetch(urlCadastro, options)
        .then(data => setPosted(true))
        .catch(error => console.log(error))

    }

    const cpf = parseInt(values.cpf)
    const telefone = parseInt(values.telefone)
    const idade = parseInt(values.idade)
    const cep = parseInt(values.cep)
    const numero = parseInt(values.numero)
    values.cpf = cpf
    values.telefone = telefone
    values.idade = idade
    values.cep = cep
    values.numero = numero

    return(
        <form >
            <S.Input value={values.nome} onChange={handleInputChange} name="nome" label="nome"/>

            <S.Input value={values.senha} onChange={handleInputChange} name="senha" label="senha"/>

            <S.Input value={values.cpf} onChange={handleInputChange} name="cpf" label="nome" type="number"/>
            
            <S.Input value={values.email} onChange={handleInputChange} name="email" label="nome"/>

            <S.Input value={values.telefone} onChange={handleInputChange} name="telefone" label="telefone" type="number"></S.Input>
            
            <S.Input value={values.idade} onChange={handleInputChange} name="idade" label="idade" type="number"></S.Input>
            
            <S.Input value={values.cep} onChange={handleInputChange} name="cep" label="cep" type="number"></S.Input>
            
            <S.Input value={values.bairro} onChange={handleInputChange} name="bairro" label="bairro"></S.Input>
            
            <S.Input value={values.rua} onChange={handleInputChange} name="rua" label="rua"></S.Input>

            <S.Input value={values.numero} onChange={handleInputChange} name="numero" label="numero" type="number"></S.Input>

            <button onClick={submit}>Cadastrar</button>
        </form>   
    )
}