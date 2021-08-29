import React from 'react'
import * as S from './style'
import ProfLeo from '../../Img/Professor1.jpg'
import MedicoPauloMuzzy from '../../Img/médicoEsportivo.jpg'
import ProfRenato from '../../Img/Renato-Cariani.png'


const Professores = () => {
    return (
        <S.Container>
            <S.profTitulo>Professores</S.profTitulo>
            <S.profSubtitulo>Esses serão os profissionais que irão cuidar do seu desenvolvimento muscular</S.profSubtitulo>
            <S.containerPerfil>
                <S.profPerfil>
                <img src={ProfLeo} alt="professor" />
                <S.ul>
                    <S.li>Nome: Leo Stronda</S.li>
                    <S.li>Idade: 32 anos</S.li>
                    <S.li>Formação: Educação Física </S.li>
                </S.ul>
                </S.profPerfil>
            </S.containerPerfil>
             
            <S.containerPerfil2>
                <S.profPerfil>
                <img src={MedicoPauloMuzzy} alt="professor" />
                <S.ul>
                    <S.li>Nome: Paulo Muzzy</S.li>
                    <S.li>Idade: 32 anos</S.li>
                    <S.li>Formação: Medicina </S.li>
                    <S.li>Especializaçõ: Medicina Aplicada a Esporte </S.li>
                </S.ul>
                </S.profPerfil>
            </S.containerPerfil2>
            <S.containerPerfil3>
                <S.profPerfil>
                <img src={ProfRenato} alt="professor" />
                <S.ul>
                    <S.li>Nome: Renato Cariane</S.li>
                    <S.li>Idade: 49 anos</S.li>
                    <S.li>Formação: Química </S.li>
                </S.ul>
                </S.profPerfil>
            </S.containerPerfil3>
            
            
        </S.Container>
    )
}

export default Professores;
