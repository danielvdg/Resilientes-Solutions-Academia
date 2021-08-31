import React from 'react'
import * as S from './style'
import Button from '../../Components/Button'


const Login = () => {
    return (
        <S.Container>
      <S.Form>
        <S.Label htmlFor="label">Nome</S.Label>
        <S.Input id="label" />              
        <S.Label>Senha</S.Label>
        <S.Input />        
        <Button>Enviar</Button>
      </S.Form>    
      <S.Link>Equeceu Senha</S.Link>
      <S.Link>Cadastre-se</S.Link>
    </S.Container>
    )
}

export default Login;