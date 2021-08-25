//import Components
import Button from "../../Components/Button";
//import imagens
import imagemPlano from "../../Img/imagem1.png";
//import estilo
import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
            <S.titulo>Escolha um do Nossos Plano</S.titulo>

            <S.subtitle>Treine o quanto quiser com     nossos planos. 
                Todos oferecem áreas de musculação, aeróbico, 
                aulas especiais e de ginástica
            </S.subtitle>
            <S.plano>
               <S.cardPlano>
                    <S.ul>
                        <S.li>Básico</S.li>
                        <S.li>Musculação</S.li>
                        <S.li>Aerobicos</S.li>
                        <S.li>R$ 49,99</S.li>
                        <S.li><Button>Cadastrar</Button></S.li> 
                    </S.ul>
               </S.cardPlano>
               
            </S.plano>
            <S.plano>
               <S.cardPlano>
                    <S.ul>
                        <S.li>Preumim</S.li>
                        <S.li>Musculação</S.li>
                        <S.li>Aeróbicos</S.li>
                        <S.li>Aulas</S.li>
                        <S.li>Ganhe uma camiseta</S.li>
                        <S.li>Cadeira de Massagem Liberada</S.li>
                        <S.li>R$ 99,99</S.li>
                        <S.li><Button>Cadastrar</Button></S.li>
                    </S.ul>
               </S.cardPlano>
               
            </S.plano>
            <S.card>
            <img src={imagemPlano}/>
            </S.card>
       
        
    
    </S.Container>
  );
};

export default Home;
