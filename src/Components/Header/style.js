import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 15px;
    background-color: ${(props)=>props.theme.cores.preto2};
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >img{
        width: 50px;
    }
`

export const Nav = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`