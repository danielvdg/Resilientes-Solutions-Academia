import styled from "styled-components";

export const Container = styled.div `
    display:grid;
    grid-template-areas: "titulo" "titulo"
                         "body"   "body2"
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 200px 1fr;
    width:100%;
    min-height:100%;
`

export const Titulo = styled.h1 `
    text-align: center;
`

export const Input = styled.input `
`