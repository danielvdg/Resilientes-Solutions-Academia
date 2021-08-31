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
      method:'GET'
    }
    await fetch(url,options)
    .then(response => response.json())
    .then(data =>
    {
      if(data.result.senha === values.senha)
      {
        return data.result.id
      }
      else
        alert('SENHA ERRADA, BABACA!')
    })
    .catch(error => alert('Login ou senha incorretos'))
 
  
    const idAluno = await fetch('https://safe-fjord-35975.herokuapp.com/aluno/email/' + values.email)
      .then(response => response.json())
      .then(data => 
      {
        handleLogin(data.result.id)
        return data.result.id
      })
      .catch(error => console.log(error))

    if(idAluno>0){
      history.replace('/profile')
    } 
    else 
    {
      setIsHidden(false)
      setTimeout(()=>{
        setIsHidden(true)
      },2000)
    } 
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
        <S.Button onClick={checkLogin}>Enviar</S.Button>
      </S.Form> 

      <Link to="/esqueceusenha">Esqueceu Senha</Link>
      <Link to="/profile">Cadastre-se</Link>

    </S.Container>
  )
}

export default Login;