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
<<<<<<< HEAD
import Cadastro from "./Pages/CadastroDaniel"
=======
import EsqueceuSenha from "./Pages/EsqueceuSenha";
import Cadastro from "./Pages/Cadastro/Cadastro"

>>>>>>> 5551818f402ef09a908cf56120adf4a7dd7dd6e2
//Import Sytles
import { ligth } from "./Style/Theme/ligth";
import * as S from './Style/App.styles';





const App = () => {
  
  return(
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
<<<<<<< HEAD
              <Route path='/cadastro' exact component={Cadastro}></Route>
            </Switch>
=======
              <Route path='/esqueceusenha' exact component={EsqueceuSenha}></Route>
              <Route path='/cadastro' exact component={Cadastro}></Route>
            </Switch>            
>>>>>>> 5551818f402ef09a908cf56120adf4a7dd7dd6e2
            <Footer/>
        </BrowserRouter>
      </S.Container>
    </ThemeProvider>
  );
}


export default App;
