import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import { GlobalStyle } from "./Style/GlobalStyles";
import { ThemeProvider } from "styled-components";
//import Components
import Header from "./Components/Header";
import UserLogin from "./Components/User";
import Footer from "./Components/Footer";
//import Pages
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import NossoTime from "./Pages/NossoTime";
import Professor from "./Pages/Professor";
import Login from "./Pages/Login";
//Import Sytles
import { ligth } from "./Style/Theme/ligth";
import * as S from './Style/App.styles'




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
            </Switch>
            <UserLogin />
            <Footer/>
        </BrowserRouter>
      </S.Container>
    </ThemeProvider>
  );
}


export default App;
