import React from 'react'
import * as S from './style'
import logo from '../../Assets/logo.png'
import Cookies from 'universal-cookie'

const Header = () => {
    const cookies = new Cookies();
    if(cookies.get('sessaoAluno'))
        var switchzinho = <S.Link href='/profile'>Minha Conta</S.Link>  
    else
        var switchzinho = <S.Link href='/login'>Login</S.Link>

    return (
       <S.Container>
           <S.Logo>
            <img src={logo} alt="logo" />
           <S.Link href='/'>Home</S.Link>
           </S.Logo>
           <S.Nav>
               <S.Link href='/nossotime'>Nosso Time</S.Link>
               <S.Link href='/professor'> Professores</S.Link>
               {switchzinho}

           </S.Nav>
       </S.Container>
    )
}

export default Header
