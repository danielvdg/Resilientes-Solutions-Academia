import styled from "styled-components";

export const Container = styled.div`
    background-image: url('https://cdn.hipwallpaper.com/i/43/30/rGY4z3.jpg');
    background-size: cover;
    display:grid;
    grid-template-areas: "titulo"
                         "body1";
    grid-template-rows: 100px 1fr;
    width:100%;
    min-height:100%;
    font-family: 'Kanit', sans-serif;
    height:88vh;
`
export const TituloWrapper = styled.div`
    grid-area: titulo;
    background: rgb(220,29,36);
    align-items:center;
    margin: 1% 30%;
    border-radius: 16px;
`

export const Titulo = styled.h1`
    text-align:center;
    font-family: 'Kanit', sans-serif;
    padding: 3%;
`

export const FormWrapper = styled.div`
    grid-area: body1;
    background: rgb(220,29,36);
    margin: 3% 15%;
    border-radius: 12px;
    padding-left: 7%;  
    height:fit-content;
`

export const Form = styled.form`
    padding:1%;

    div  {
        width:42%;
        float:left;
        display:inline-block;
    }

    label {
        margin-top:1%;
    }

    div input {
        width:89%;
        float:left;
    }

    button {
        float: right;
        margin: 1%;
        width: 17.65%;
    }
`

export const Input = styled.input`
    width: 89%;
    float:right
`