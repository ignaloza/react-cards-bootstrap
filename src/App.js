import "./App.css";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Disclaimer from "./components/Disclaimer";
import GiocoResponsabile from "./components/GiocoResponsabile";

function App() {
  return (
    <div className="App">
       <HashRouter basename="/">
       <Switch>            
        <Route exact path = "/privacy" component = {Privacy}/>
        <Route exact path = "/disclaimer" component = {Disclaimer}/>
        <Route exact path = "/giocoresponsabile" component = {GiocoResponsabile}/>
      <Cards />
      </Switch>
      <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
