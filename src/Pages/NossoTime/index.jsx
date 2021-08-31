import React from 'react'
import * as S from './style'
import time from '../../Img/nossotime.png'

const NossoTime = () => {
    return (
        <S.Container>
            <S.timeTitulo>Nosso Time</S.timeTitulo>
            <S.containerPerfil>
                <S.timePerfil>
                <img src={time} alt="time de devs" />
                <S.ul>
                    <S.li>Daniel Alves </S.li>
                    <S.li>Kellen Lima</S.li>
                    <S.li>Gustavo Henrique de Souza</S.li>
                    <S.li>Thiago Pacheco</S.li>
                </S.ul>
                </S.timePerfil>
            </S.containerPerfil>     
        </S.Container>
    )
}

export default NossoTime;
