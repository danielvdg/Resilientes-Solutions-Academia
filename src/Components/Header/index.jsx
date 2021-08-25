import React from 'react'

import * as S from './style'
import logo from '../../Assets/pngegg.png'
const Header = () => {
    return (
       <S.Container>
           <S.Logo>
            <img src={logo} alt="logo" />
           <S.Link href='/'>Home</S.Link>
           </S.Logo>
           <S.Nav>
               <S.Link href='/contato'>Contato</S.Link>
               <S.Link href='/nossotime'>Nosso Time</S.Link>
           </S.Nav>
       </S.Container>
    )
}

export default Header
