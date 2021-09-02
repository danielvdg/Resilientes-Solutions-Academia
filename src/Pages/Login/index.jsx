import {useState, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import * as S from './style';
import {Context} from '../../SessionContext';
import Button from '../../Components/Button'



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
        <S.Label htmlFor="label">Nome</S.Label>
        <S.Input id="label" value={values.email} onChange={handleInputChange} name="email"/>              
        <S.Label>Senha</S.Label>
        <S.Input value={values.senha} onChange={handleInputChange} name="senha" />        
        <Button onClick={checkLogin}>Enviar</Button>
      </S.Form> 

      <Link to="/esqueceusenha">Esqueceu Senha</Link>
      <Link to="/cadastro">Cadastre-se</Link>

    </S.Container>
  )
}

export default Login;