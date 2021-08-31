import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:88vh;
background: ${props=> props.theme.cores.cinzaEscuro};

`

export const Form = styled.form`
    width: 50%;
    height: 50%;
    font-size: 30px;
    display: flex;
    background: ${props=> props.theme.cores.preto2};
    color: ${props=> props.theme.cores.laranja};
    font-family: ${props=> props.theme.fonts.titulo} ;
    font-weight: bold ;
    text-align:center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;       


`
export const Label = styled.label`
&:hover{
    color: ${props=> props.theme.cores.amarelo};

    }


`

export const Input = styled.input`
padding: 0.5em;
background:${props=> props.theme.cores.cinzaEscuro};
border: none;
border-radius: 7px;
width: 50%;
margin: 0.5em;



`
export const Message = styled.div`


`
export const Link = styled.div`
    color: #b3b3b3;
    font-size: 15px;
    &:hover{
        color: ${props=> props.theme.cores.branco};
    }
   

`

export const Button = styled.button`
    font-size: 30px;
    font-weight: bold;
    font-family: ${props=> props.theme.fonts.titulo};
    width: 200px;
    height: 50px;
    border: none;
    background-color: ${props => props.theme.cores.laranja};
    border-radius: 10px;
    &:hover{
        background-color: ${props=> props.theme.cores.amarelo};
    }   
    &:active{
        background-color: ${props=> props.theme.cores.platina};
    }
`
