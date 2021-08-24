import React from 'react'
import {Link} from 'react-router-dom'
import * as S from './style'
import logo from '../../Assets/pngegg.png'
const Header = () => {
    return (
       <S.Container>
           <S.Logo>
            <img src={logo} alt="logo" />
           <Link to='/'>Home</Link>
           </S.Logo>
           <S.Nav>
               <Link to='/contato'>Contato</Link>
               <Link to='/nossotime'>Nosso Time</Link>
           </S.Nav>
       </S.Container>
    )
}

export default Header
