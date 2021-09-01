import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props=> props.theme.cores.cinzaEscuro};        
    display: grid;
    grid-template-areas: 
    'title title'
    'subtitle subtile'
    'perfil perfil';
    grid-template-rows: 50px 70px  200px;
    gap: 20px;

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
    font-family: ${props=> props.theme.fonts.titulo};
    font-size: 50px;
    width: 100%;
    height: 100%;
    margin-top: 1%;
    justify-self: center;
    text-align: center;
    align-items: center;
    color: ${props=> props.theme.cores.branco};
    text-shadow: 0 1px 0 black, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 black,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0),
               0 3px 5px rgba(0,0,0),
               0 5px 10px rgba(0,0,0),
               0 10px 10px rgba(0,0,0),
               0 20px 20px rgba(0,0,0);


` 
export const containerPerfil =styled.div`
    grid-area: perfil;  
    width: 100%;
    height: 450px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
 `
export const timePerfil = styled.div`
    display:flex;
    justify-content: flex-start;
    width:80%;
    height: 200px;

    >img{
        width:350px;
        height: 320px;
        display: block;

    }
    

`
export const ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border:1px solid white;

`

export const li = styled.li`
    display: flex;
    

`
