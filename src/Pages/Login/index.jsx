import {useState, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import * as S from './style';
import {Context} from '../../SessionContext';

const Login = () => {
  const { session, handleLogin } = useContext(Context);
  const [isHidden, setIsHidden] = useState(true);
  const history = useHistory();
  
  const initialValues = {
    "email":'',
    "senha":''
  }

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setValues({
        ...values,
        [name]: value,
    });
  }

  const checkLogin = async (e) => {
    e.preventDefault();

    const url = 'https://safe-fjord-35975.herokuapp.com/aluno/email/' + values.email
    const options = {
      method:'POST'
    }
    await fetch(url,options)
    .then(response => response.json())
    .then(data =>
    {
      if(data.result.senha === values.senha)
      {
        const idAluno = fetch(url,options)
        .then(response => response.json())
        .then(data => 
        {
          handleLogin(data.result.id)
          return data.result.id
        })
        .catch(error => console.log(error))
  
        if(idAluno>0){
        history.replace('/profile/'+idAluno)
        } 
        else 
        {
        setIsHidden(false)
        setTimeout(()=>{
          setIsHidden(true)
        },2000)
        }   
      }
      else
        alert('SENHA ERRADA, BABACA!')
    })
    .catch(error => alert('Login ou senha incorretos'))
 
  
    
  }

  if(session.aluno>0){
    history.replace('/profile')
  }

  return (
    <S.Container>

      <S.Form>
<<<<<<< HEAD
        <S.Label htmlFor="label">E-mail</S.Label>
        <S.Input id="label" placeholder="E-mail" />              
        <S.Label>Senha</S.Label>
        <S.Input placeholder="Senha" />        
        <Button>Enviar</Button>
      </S.Form>    
      <S.Link>Equeceu Senha</S.Link>
      <S.Link>Cadastre-se</S.Link>
=======
        <S.Label htmlFor="label">Nome</S.Label>
        <S.Input id="label" value={values.email} onChange={handleInputChange} name="email"/>              
        <S.Label>Senha</S.Label>
        <S.Input value={values.senha} onChange={handleInputChange} name="senha" />        
        <S.Button onClick={checkLogin}>Enviar</S.Button>
      </S.Form> 

      <Link to="/esqueceusenha">Esqueceu Senha</Link>
      <Link to="/cadastro">Cadastre-se</Link>

<<<<<<< HEAD
>>>>>>> 0e929ef31e31a99c328316f8ad0f86d1f1d05fd7
=======
>>>>>>> 1af5e1c575a93c531a3091e48a0f009076262614
    </S.Container>
  )
}

export default Login;