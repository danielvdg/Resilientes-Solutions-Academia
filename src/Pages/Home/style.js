import styled from "styled-components";
//  import imgPlano from '../../Img/imgPlano.jpg'

export const Container = styled.div`
    width: 100%;
    height: auto;
   
`
export const ContainerInfo = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height:100vh;
      background-image: url(https://images.unsplash.com/photo-1589828695526-c461b4ddc158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFiZG9taW5hbCUyMG11c2NsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
      background-color: black;
      background-repeat: no-repeat;
      background-size:50% 100%;
      bacground-attachment: fixed;
      z-index: 6;
      white-space: nowrap;
      font-size: 49px;
      line-height: 49px;
      font-weight: 700;
      color: rgb(220, 29, 36);
      letter-spacing: 0px;
      font-family: "Hind Siliguri";
      text-transform: uppercase;
      visibility: inherit;
      transition: none 0s ease 0s;
      text-align: inherit;
      border-width: 0px;
      margin: 0px;
      padding: 0px;
      min-height: 0px;
      min-width: 0px;
      max-height: none;
      max-width: none;
      opacity: 1;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transform-origin: 50% 50% 0px;
      >ul{
        width: 40%;
        height: 700px;
        color: white;
        font-size:30px;
        text-decoration:none;
        font-weight: 700; 
        font-family: ${props=>props.theme.fonts.texto}
      }      
      >li{
        
        
      }

    
    @media screen and (max-width:1300px){
      margin-left:0;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

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
text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);

justify-self: center;
text-align: center;
align-items: center;
color: ${props=> props.theme.cores.preto};

`

export const subtitleInfo = styled.h2`
  grid-area: subtitle;
  grid-row: 2;
  grid-column: 1/4;
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
    grid-template-rows: 40px 60px auto;
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
    background-color:${props=> props.theme.cores.talco} ;
    color:${props=> props.theme.cores.amarelo} ;
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
  

`
export const planoLista = styled.p`
    width: 100%;
    height: 70px;
    font-size: 30px;
    display: flex;
    background: ${props=> props.theme.cores.preto2};
    color: ${props=> props.theme.cores.laranja};
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



