import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:88vh;
background-image: url(https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80);
background-repeat: no-repeat;
background-size: 100%;
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

export const Link = styled.div`
    color: #b3b3b3;
    font-size: 15px;
    &:hover{
        color: ${props=> props.theme.cores.branco};
    }
   

`

