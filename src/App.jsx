import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import { GlobalStyle } from "./Style/GlobalStyles";
import { ThemeProvider } from "styled-components";
//import Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//import Pages
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import NossoTime from "./Pages/NossoTime";
import Professor from "./Pages/Professor";
import Login from "./Pages/Login";
import EsqueceuSenha from "./Pages/EsqueceuSenha";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Profile from "./Pages/Profile";
import Session from "./SessionContext";

//Import Sytles
import { ligth } from "./Style/Theme/ligth";
import * as S from './Style/App.styles';





const App = () => {
  
  return(
    <Session>
      <ThemeProvider theme={ligth}>
        <S.Container>
          <BrowserRouter>
            <GlobalStyle/>
            <Header/>
              <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/contato' exact component={Contato}></Route>
                <Route path='/nossotime' exact component={NossoTime}></Route>
                <Route path='/professor' exact component={Professor}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/esqueceusenha' exact component={EsqueceuSenha}></Route>
                <Route path='/cadastro' exact component={Cadastro}></Route>
                <Route path='/profile' exact component={Profile}></Route>
              </Switch>            
              <Footer/>
          </BrowserRouter>
        </S.Container>
      </ThemeProvider>
    </Session>
  );
}


export default App;
