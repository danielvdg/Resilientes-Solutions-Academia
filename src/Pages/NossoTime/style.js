import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props=> props.theme.cores.cinzaEscuro};        
    display: grid;
    grid-template-areas: 
    'title title'
    'subtitle subtile'
    'perfil perfil'
    'intergrantes intergrantes';
    
    grid-template-rows: 70px 70px  auto;
    gap: 20px;

    @media screen and ( max-height:1000px){
       height: 100%;
    }
    
    @media screen and ( max-width:1600px){
       width: 100%;
    }

` 
export const timeTitulo = styled.div`
    grid:title;
    grid-column: 1/3;
    grid-row:1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-family: ${props=> props.theme.fonts.texto};
   
    width: 100%;
    height: 100%;
    margin-top: 4%;
    justify-self: center;
    text-align: center;
    align-items: center;
    color: ${props=> props.theme.cores.vermelho};
    text-transform: uppercase;
    font-weight: bold;
    


` 
export const containerPerfil =styled.div`
    grid-area: perfil;  
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    
    >img{
        width:100%;
        height: 700px;
        

    }
 `

export const ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    width: 80%;
    height: 100%;
    /* border:1px solid white; */

`

export const li = styled.li`
    display: flex;
    color: ${props=> props.theme.cores.vermelho};
    font-family: ${props=> props.theme.fonts.texto};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;

    

`
