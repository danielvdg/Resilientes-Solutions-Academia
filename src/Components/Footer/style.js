import styled from "styled-components";

export const  Container = styled.div`
    width: 100%;
    height: auto;
    
`
export const  footer = styled.footer`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: ${props=> props.theme.cores.preto};
    font-family: ${props=> props.theme.fonts.texto};
    color:${props => props.theme.cores.vermelho};

    
`