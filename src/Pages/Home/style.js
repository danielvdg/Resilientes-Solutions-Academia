import styled from "styled-components";

export const Container = styled.div`
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


`

export const titulo = styled.h1`
grid-area: title;
grid-column: 1/ 4;
grid-row: 1;
font-family: ${props=> props.theme.fonts.titulo};
width: 100%;
height: 100%;
justify-self: center;
text-align: center;
align-items: center;
color: ${props=> props.theme.cores.branco};


`
export const subtitle = styled.h2`
grid: subtitle;
grid-row: 2;
grid-column: 1/4;
text-align: center;
font-family: ${props=> props.theme.fonts.subtitulo};
color: ${props=> props.theme.cores.branco};

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
    justify-content: center;
`
export const ul = styled.ul`
    width: 450px;
    height: 600px;
    border: 4px solid ${props=> props.theme.cores.laranja} ;
    padding: 6%;
    background-color:${props=> props.theme.cores.talco} ;
    color:${props=> props.theme.cores.preto} ;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`
export const li = styled.li`
    font-family: ${props=> props.theme.fonts.texto};
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`

export const card =styled.div`
grid-area: picture;
display: flex;
width: 100%;
height: 100%;


>img{
    width: 300px;
    height: 500px;
    animation: pulse 0.7s infinite;
    margin: 0 auto;
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



