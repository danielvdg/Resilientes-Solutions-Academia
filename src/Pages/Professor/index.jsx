import React from 'react'
import * as S from './style'
import ProfLeo from '../../Img/Professor1.jpg'

const Professores = () => {
    return (
        <S.Container>
            <S.profTitulo>Professores</S.profTitulo>
            <S.containerPerfil>
                <S.profPerfil>
                <img src={ProfLeo} alt="professor" />
                <S.ul>
                    <S.li>nome</S.li>
                    <S.li>idade</S.li>
                    <S.li>formado</S.li>
                    <S.li>experinência</S.li>
                </S.ul>
                </S.profPerfil>
               
                
            </S.containerPerfil>
            
            
           
            
        </S.Container>
    )
}

export default Professores;
