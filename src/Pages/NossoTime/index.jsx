import React from 'react'
import * as S from './style'
import time from '../../Img/nossotime.png'

const NossoTime = () => {
    return (
        <S.Container>
            <S.timeTitulo>Nosso Time</S.timeTitulo>
            <S.containerPerfil>
                <img src={time} alt="time de devs" />
                <S.ul>
                    <S.li>Thiago Pacheco</S.li>
                    <S.li>Kellen Lima</S.li>
                    <S.li>Gustavo Henrique de Souza</S.li>
                    <S.li>Daniel Alves </S.li>
                </S.ul> 
            </S.containerPerfil> 
                
        </S.Container>
    )
}

 

export default NossoTime;
