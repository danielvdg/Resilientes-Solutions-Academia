import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 15px;
    background-color: ${(props)=>props.theme.cores.preto};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
    @media screen and (max-width: 1300px ){
        
        width: 100%;
        display: flex;
        
    }

`

export const Link = styled.a`
    font-size:23px;
    color:${(props)=> props.theme.cores.laranja};
    text-decoration: none;
    &:active{
       color :${props => props.theme.cores.amarelo} ;
    }

`

