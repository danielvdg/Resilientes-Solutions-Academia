import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: space-between;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 7%;
    
`
export const Button = styled.button`
    font-size: 30px;
    font-weight: bold;
    font-family: ${props=> props.theme.fonts.titulo};
    width: 200px;
    height: 50px;
    border: none;
    background-color: ${props => props.theme.cores.vermelho};
    border-radius: 10px;
    
    &:hover{
        background-color: ${props=> props.theme.cores.amarelo};
    }   
    &:active{
        background-color: ${props=> props.theme.cores.platina};
    }
     
   
  
   
`