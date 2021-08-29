import React, { useEffect, useState } from 'react'

import * as S from './style'
const CadastroDaniel = () => {
    const [dadosApi,setDadosApi] = useState([]);
    
    useEffect(()=>{
        fetch(`https://calm-inlet-01792.herokuapp.com/aluno`)
        .then(resp => console.log(resp.json()))
        .then((dados)=>{
            setDadosApi(dados.result)
        })
    },[])
    
    return (
        <S.Container>
            <p>{dadosApi}</p>
        </S.Container>
    )

}

export default CadastroDaniel;
