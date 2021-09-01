//import Components
import Button from "../../Components/Button";
import React,{Link} from "react-router-dom";
//import imagens
import imagemPlano from "../../Img/imagem1.png";
import imgInfo from '../../Img/ImgInfo1.png'


//import estilo
import * as S from "./style";


const Home = (props) => {
  

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.tituloInfo>Academia Resilientes </S.tituloInfo>
        <S.subtitleInfo>
          A prática da musculação é vista por muitos apenas como uma maneira de
          aumentar a massa muscular, no entanto esse tipo de atividade física
          possui inúmeros benefícios, sendo inclusive capaz de combater a
          depressão, por exemplo. Além disso, a musculação melhora o
          condicionamento cardiorrespiratório, aumenta a densidade óssea e
          garante mais disposição física.
        </S.subtitleInfo>
        
        <S.info1>
          <S.infoTitulo>Vantagens</S.infoTitulo>
          <S.ulInfo>
            <S.liInfo>Melhora a postura corporal</S.liInfo>
            <S.liInfo>Diminui a quantidade de gordura</S.liInfo>
            <S.liInfo>Tonifica os músculos</S.liInfo>
            <S.liInfo>Combate problemas emocionais</S.liInfo>
            <S.liInfo>Aumenta a densidade óssea</S.liInfo>
            <S.liInfo> Diminui o risco de diabetes</S.liInfo>
            <S.liInfo> Melhora o condicionamento cardiorrespiratório</S.liInfo>
          </S.ulInfo>
        </S.info1>
        <S.info2 >
          <img src={imgInfo} alt='imagem info' />
        </S.info2>
        <S.info3>
          <S.infoTitulo>Importância</S.infoTitulo>
          <S.pInfo>
            A prática de atividade física é, sem dúvida, essencial para
            aumentarmos nossa qualidade de vida. Inúmeros estudos demonstram
            como a prática frequente de atividade física evita doenças e
            melhora, até mesmo, nossa disposição para a realização de nossas
            atividades diárias. A seguir, listaremos os principais benefícios de
            se praticar atividades físicas e também os riscos de se ter uma vida
            sedentária.
          </S.pInfo>
        </S.info3>
      </S.ContainerInfo>

      <S.ContainerPlano>
        <S.titulo>Escolha um dos Nossos Plano</S.titulo>
        <S.subtitle>
          Treine o quanto quiser com nossos planos. Todos oferecem áreas de
          musculação, aeróbico, aulas especiais e de ginástica
        </S.subtitle>
        <S.plano>
          <S.cardPlano>
            <S.ul>
              <S.li>
                <S.planoLista>Básico</S.planoLista>
              </S.li>
              <S.li>Musculação</S.li>
              <S.li>Aerobicos</S.li>
              <S.li>R$ 49,99</S.li>
              <S.li>
              <Link to='/cadastro'><Button>Cadastrar</Button></Link>
              </S.li>
            </S.ul>
          </S.cardPlano>
        </S.plano>
        <S.plano>
          <S.cardPlano>
            <S.ul>
              <S.li>
                <S.planoLista>Premium</S.planoLista>
              </S.li>
              <S.li>Musculação</S.li>
              <S.li>Aeróbicos</S.li>
              <S.li>Aulas</S.li>
              <S.li>Ganhe uma camiseta</S.li>
              <S.li>Cadeira de Massagem </S.li>
              <S.li>R$ 99,99</S.li>
              <S.li>
                <a href='/cadastro'><Button>Cadastrar</Button></a>
              </S.li>
            </S.ul>
          </S.cardPlano>
        </S.plano>
        <S.card>
          <img src={imagemPlano} alt="imagemPlano" />
        </S.card>
      </S.ContainerPlano>
    </S.Container>
  );
};

export default Home;
