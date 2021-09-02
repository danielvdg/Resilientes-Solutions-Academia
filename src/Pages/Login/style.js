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
background-size: cover;
bacground-attachment: fixed;
margin: auto auto;


@media screen and (max-width: 800px ){
    
    background-size: 186%;
    background-position: left;

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
    border-radius: 10px; 
    opacity: 0.8;
    box-sizing: border-box; 
   
    
    @media screen and (max-width: 800px ){
        width  :50% ;
      
          
      }
      &:hover{
        border: 4px solid ${props=> props.theme.cores.amarelo}
        
      }


`
export const Label = styled.label`
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 0e929ef31e31a99c328316f8ad0f86d1f1d05fd7
=======

>>>>>>> 1af5e1c575a93c531a3091e48a0f009076262614
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
border-botton: 2px solid;




`

export const Link = styled.div`
    color: #b3b3b3;
    font-size: 15px;
    &:hover{
        color: ${props=> props.theme.cores.branco};
    }
   

`

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 1af5e1c575a93c531a3091e48a0f009076262614
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
<<<<<<< HEAD
>>>>>>> 0e929ef31e31a99c328316f8ad0f86d1f1d05fd7
=======

>>>>>>> 1af5e1c575a93c531a3091e48a0f009076262614
