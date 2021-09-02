import styled from "styled-components";
import home from '../../Img/home.png'
//  import imgPlano from '../../Img/imgPlano.jpg'

export const Container = styled.div`
    width: 100%;
    height: auto;
   
`
export const ContainerInfo = styled.section`
      display: grid;
      grid-template-areas:
      'title title '
      'content content ';
      grid-template-rows: 100px 800px;
      grid-template-columns: repeat(2,32%);
      gap: 20px;
    
      justify-content: center;
      align-items: center;
      width: 100%;
      height:100vh;
      background-image: url(${home});
      background-position: -1.5% 0;
      background-color: black;
      background-repeat: no-repeat;

      background-size:900px 1100px;
      background-attachment: fixed;
      font-family: ${props=> props.theme.fonts.texto};
      text-transform: uppercase;
       

      >ul{
        grid-area: content;
        grid-row: 2;
        grid-column: 3;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 700px;
        justify-content: center;
        color: white;
        font-size:49px;
        font-weight: 700; 
         font-family: ${props=>props.theme.fonts.texto};
        text-transform: uppercase;
        list-style: none;
        
            

         
        h1{
          color:${props => props.theme.cores.vermelho};
          
        }
        h4{
          color: rgb(255,255,255);
          
        }
      } 
      
      


    @media screen and (max-width:1400px){
     
      width: 100%;
      height: 1200px;
      grid-row: 1;
      display: flex;
      text-align: center;
      flex-direction: column;
      background-position: center;

    }
   
   
`


export const tituloInfo = styled.h1`
grid-area: title;
grid-column: 1/ 4;
grid-row: 1;
font-family: ${props=> props.theme.fonts.titulo};
font-size: 50px;
width: 100%;
height: 100%;


justify-self: center;
text-align: center;
align-items: center;
color: ${props=> props.theme.cores.preto};

`

export const subtitleInfo = styled.h2`
 
  width: 100%;
  height: 100%;
  margin-top: 1%;
  text-align: center;
  margin-top: 1%;
  font-family: ${props=> props.theme.fonts.subtitulo};
  color: ${props=> props.theme.cores.preto};
  font-size: 35px;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

`

export const info1 = styled.div`
  grid-area: info;
  background-color:${props=> props.theme.cores.azulSafira} ;
  grid-row: 3;
  grid-column: 1;
  width: 95%;
  height: 95%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  
  @media screen and (max-width:1300px){
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      
      align-items: center;


    }

  

`
export const info2 = styled.div`
  grid-area: info;
  grid-row: 3;
  grid-column: 2;
  width: 95%;
  height: 95%;
  
  
  >img{
    width: 100%;
    height: auto;

    transform: translateX(20px);
    -webkit-animation: animeLeft .5s forwards;
    animation: animeLeft .5s forwards;

     @keyframes animeLeft {
      0%{opacity:0;
        transform:translateX(20px);
      }
      100%{opacity:100;
        transform:translateX(-20px);
      }
    } 
    
    @keyframes animeLeft {
      0%{-webkit-opacity:0;
        -webkit-transform:translateX(20px);
      }
      100%{-webkit-opacity:100;
        -webkit-transform:translateX(-20px);
      }
    } 

  }
 
  


`
export const info3 = styled.div`
  grid-area: info;
  background-color:${props=> props.theme.cores.azulSafira} ;
  font-weight: bold;
  grid-row: 3;
  grid-column: 3;
  width: 95%;
  height: 95%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media screen and (max-width:1300px){
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      
      align-items: center;


    }
 
`
export const infoTitulo = styled.h1`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props=> props.theme.fonts.titulo};
  font-size: 50px;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
`

export const ulInfo = styled.ul`
  width: 100%;
  height: 100%;
  

`
export const liInfo = styled.li`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-family: ${props=> props.theme.fonts.texto};
  font-weight: bold;
  display: flex;
  text-align: justify;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  justify-content: center;
  align-items: center;

`
export const pInfo = styled.p`
  padding: 8%;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  width: 100%;
  height: 600px;
  font-size: 20px;
  line-height: 30px;
  font-family: ${props=> props.theme.fonts.texto};

`
export const ContainerPlano = styled.section`
   display: grid;
    width: 100%;
    height: 100vh;
    grid-template-areas: 
    'title title title'
    'subtitle subtitle subtitle'
    'plan plan picture';
    gap:20px;
    grid-template-rows: 40px 100px auto;
    background-color:${props=> props.theme.cores.preto2} ;
    background-position: 30% 45%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    @media screen and (max-width: 1300px ){
        
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    @media screen and (max-height:1000px){

      width: 100%;
      height: 100%;
      
    }
    
    
`
export const section =styled.section`
  width: 100%;
  height: 100vh;

  
`


export const titulo = styled.h1`
grid-area: title;
grid-column: 1/ 4;
grid-row: 1;
font-family: ${props=> props.theme.fonts.titulo};
font-size: 50px;
width: 100%;
height: 100%;
margin-top: 1%;
justify-self: center;
text-align: center;
align-items: center;
color: ${props=> props.theme.cores.branco};

`
export const subtitle = styled.h2`
  grid: subtitle;
  grid-row: 2;
  grid-column: 1/4;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 1%;
  font-family: ${props=> props.theme.fonts.subtitulo};
  color: ${props=> props.theme.cores.branco};
  font-size: 35px;

`
export const plano = styled.div`
  color: ${props=> props.theme.cores.branco};
`
export const cardPlano = styled.div`
    grid-area: plan;
    width: 100%;
    height: 100%;
    color: ${props=> props.theme.cores.branco};
    display: flex;
    margin-top: 5%;
    margin-bottom: 5%;
    justify-content: center;
    opacity:0;
    transform: translateX(20px);
    -webkit-animation: animeLeft .5s forwards;
    animation: animeLeft .5s forwards;

     @keyframes animeLeft {
      0%{opacity:0;
        transform:translateX(20px);
      }
      100%{opacity:100;
        transform:translateX(-20px);
      }
    } 
    
    @keyframes animeLeft {
      0%{-webkit-opacity:0;
        -webkit-transform:translateX(20px);
      }
      100%{-webkit-opacity:100;
        -webkit-transform:translateX(-20px);
      }
    } 
`
export const ul = styled.ul`
    width: 450px;
    height: 800px;
    border: 4px solid ${props=> props.theme.cores.laranja} ;
    padding: 2%;
    background-color:${props=> props.theme.cores.preto2} ;
    color:${props=> props.theme.cores.vermelho} ;
    font-weight: bold;
    font-size: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    

    @media screen and (max-width: 1300px ){
      height  :700px ;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 9%;
        
    }
    &:hover{
      border: 4px solid ${props=> props.theme.cores.amarelo}
      
    }
    
`
export const li = styled.li`
    font-family: ${props=> props.theme.fonts.texto};
    width: 100%;
    height: 20%;
    text-shadow: #000 2px 3px 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    >a{
      text-decoration: none;
    }
  

`

export const planoLista = styled.p`
    width: 100%;
    height: 70px;
    font-size: 30px;
    display: flex;
    background: ${props=> props.theme.cores.preto2};
    color: ${props=> props.theme.cores.vermelho};
    font-family: ${props=> props.theme.fonts.titulo} ;
    font-weight: bold ;
    text-align:center;
    align-items: center;
    justify-content: center;
    
    &:hover{
      color: ${props=> props.theme.cores.amarelo};

    }
    
`
export const card =styled.div`
  grid-area: picture;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top : 5% ;

  >img{
      width: 350px;
      height: 600px;
      animation: pulse 0.7s infinite;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      animation-direction: alternate;
      -webkit-animation-name: pulse;
      animation-name: pulse;
      }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -webkit-filter: brightness(100%);
    }
    100% {
      -webkit-transform: scale(1.1);
      -webkit-filter: brightness(200%);
    }

  }

@keyframes pulse {
  0% {
    transform: scale(1);
    filter: brightness(100%);
  }
  100% {
    transform: scale(1.1);
    filter: brightness(200%);
  }
}


`



