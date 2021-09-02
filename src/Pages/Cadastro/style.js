import styled from "styled-components";

export const Main = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700;800;900&display=swap');

    background-image: url('https://wallpapercave.com/wp/wp2356258.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 82.1vh;
`

export const Form = styled.form`
    width : 50%;
    height: 50%;
    align-self: center;
    justify-self: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 2px 7px 5px 1px #000;
    border: 1px solid #f90;
    background: rgb(220, 29,36);
    padding:2% 0;

    >input{
        margin: 10px;
        padding: 1% 4%;
        border-radius: 6px;
        border: 1px solid #333;
        width: 70%;
        transition-duration:.5s;
        
        &:hover{
            width:80%;
            border: 2px solid #00b7cc;
        }
    }
    
   

    >button{
        margin: 10px;
        padding: 2% 10%;
        background: black;
        color: white;
        border-radius: 10px;
        border: 2px solid #333;
    }
`

export const TextWrapper = styled.div`
    align-self:center;
    justify-self:center;
    transform: skew(0deg,-20deg);
    padding: 2% 4%;
    box-shadow: -11px 8px 5px 10px #000;
    border: 5px solid #f90;
    background: rgb(220, 29,36);
    transition-duration:.5s;

    &:hover{
        transform: skew(0deg,-25deg);
    }
`
export const Text = styled.div`    
    text-align:center;
    >h2{
        font-size:40px;
        font-family: 'Kanit', sans-serif;
        font-weight: 900;
        text-shadow: -2px 4px #fea61b;
    }
`

export const Label = styled.label`
    font-weight:700;
    font-size-20px;
    font-family: 'Kanit', sans-serif;
`
