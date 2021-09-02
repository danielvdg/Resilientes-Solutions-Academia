import React from 'react'
import * as S from './style'
const Button = (props) => {

    return (
        <S.Container>
            <S.Button onClick={props.onClick}>{props.children}</S.Button>
        </S.Container>
    )

}

export default Button;
