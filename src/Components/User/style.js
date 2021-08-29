import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:100%;
background: ${props=> props.theme.cores.cinzaEscuro};


`

export const Form = styled.div`
    width: 50%;
    height: 100%;
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
export const Label = styled.div`
 


`

export const Input = styled.div`
padding: 0.5em;
color: green;
background:${props=> props.theme.cores.cinzaEscuro};
border: none;
border-radius: 3px;
width: 50%;
margin: 0.5em;


`
export const Message = styled.div`


`
