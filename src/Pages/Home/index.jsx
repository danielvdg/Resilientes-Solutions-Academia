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
      <S.titulo>Resilientes Solutions Academia</S.titulo>
      <ul>
        <li><h1>Conquiste o seu corpo perfeito</h1></li>
        <li><h4>Comece</h4></li>
        <li><h1>HOJE</h1></li>
      </ul>
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
