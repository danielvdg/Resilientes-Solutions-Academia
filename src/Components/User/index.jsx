import React from 'react'
import * as S from './style'
import Button from '../Button'

const User = () => {

  return (
    <S.Container>
      <S.Form>
        <S.Label htmlFor="label">Nome</S.Label>
        <S.Input id="label" />
        <S.Message></S.Message>
      </S.Form>
      <S.Form>
        <S.Label>Senha</S.Label>
        <S.Input />
        <S.Message></S.Message>
      </S.Form>
      <Button>Enviar</Button>
    </S.Container>

  )
}


export default User;