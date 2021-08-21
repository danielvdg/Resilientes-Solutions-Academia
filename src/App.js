import React,{Component} from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Home/HomePage";
import './Assets/App.css';


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route path='/' exact component={Homepage}></Route>
          </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
