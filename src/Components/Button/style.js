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
    font-size: 25px;
    font-weight: bold;
    font-family: ${props=> props.theme.fonts.texto};
    width: 200px;
    height: 50px;
    border: none;
    background-color: ${props => props.theme.cores.laranja};
    border-radius: 10px;
    &:active{
        background-color: ${props=> props.theme.cores.amarelo};
        
    }
   
`