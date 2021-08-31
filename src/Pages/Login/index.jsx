import React, {useState} from 'react'
import * as S from './style'
import Button from '../../Components/Button'


const Login = () => {
    const initialValues = {
     "email":'',
     "senha":''
    }

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
      const { name, value} = e.target;
      setValues({
          ...values,
          [name]: value,
      });
    }

    const checkLogin = async (e) => {
      e.preventDefault();

      const url = 'https://safe-fjord-35975.herokuapp.com/check/'+values.email
      const options = {
        method:'GET'
      }
      await fetch(url,options)
      .then((response) => {
        if(response.status === 500)
        {
          console.log(response.error)
        }
      })
      .catch(error => console.log(error))
      console.log(url)
    }

    console.log(values)

    return (
        <S.Container>
      <S.Form>
        <S.Label htmlFor="label">Nome</S.Label>
        <S.Input id="label" value={values.email} onChange={handleInputChange} name="email"/>              
        <S.Label>Senha</S.Label>
        <S.Input value={values.senha} onChange={handleInputChange} name="senha" />        
        <button onClick={checkLogin}>Enviar</button>
      </S.Form>    
      <S.Link>Equeceu Senha</S.Link>
      <S.Link>Cadastre-se</S.Link>
    </S.Container>
    )
}

export default Login;