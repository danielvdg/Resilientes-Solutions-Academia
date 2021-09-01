import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props=> props.theme.cores.cinzaEscuro};        
    display: grid;
    grid-template-areas: 
    'title title'
    'subtitle subtile'
    'perfil perfil'
    'perfil2 perfil2',
    'perfil3 perfil3',
    'perfil4 perfil4',
    'perfil5 perfil5';
    
    grid-template-rows: 50px 70px  repeat(auto,200px);
    gap: 20px;

` 
export const profTitulo = styled.div`
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

export const profSubtitulo= styled.p`
    grid-area:subtitle;
    grid-column: 1/3;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-family: ${props=> props.theme.fonts.subtitulo};
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

`
export const containerPerfil =styled.div`
    grid-area: perfil;
    grid-row: 3;
    grid-column: 1/3;
    width: 100%;
    height: 250px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    
    
`
export const containerPerfil2 =styled.div`
    grid-area: perfil2;
    grid-column: 1/3;
    grid-row :4 ;
    width:100%;
    height: 250px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    
    
`
export const containerPerfil3 =styled.div`
    grid-area: perfil3;
    grid-column: 1/3;
    grid-row :5 ;
    width: 100%;
    height: 250px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-auto-flow: row;
    
    
`
export const containerPerfil4 =styled.div`
    grid-area: perfil3;
    grid-column: 1/3;
    grid-row :5 ;
    width: 100%;
    height: 250px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-auto-flow: row;
    
    
`

export const profPerfil = styled.div`
    display:flex;
    justify-content: flex-start;
    width:80%;
    height: 200px;
    border: 10px solid orange;
    border-radius: 10px;

    
    
    >img{
        width: 300px;
        height: 180px;
    }
    
    &:hover{
        transition: 0.7s;
        border: 10px solid  #BD000D;
        box-shadow:
                1px 1px #BD000D,
                2px 2px #BD000D,
                3px 3px #BD000D,
                4px 4px #BD000D,
                5px 5px #BD000D,
                6px 6px #BD000D,
                7px 7px #BD000D,
                8px 8px #BD000D,
                9px 9px #BD000D,
                10px 10px #BD000D,
                11px 11px #BD000D,
                12px 12px #BD000D,
                13px 13px #BD000D,
                14px 14px #BD000D,
                15px 15px #BD000D;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }

`
export const ul = styled.ul`
    display: flex;
    font-size: 20px;
    font-family: ${props=> props.theme.fonts.texto};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props=> props.theme.cores.platina};
    
    



`

export const li = styled.li`
    display: flex;
    width: 100%;
    height: 100%;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

    

`
