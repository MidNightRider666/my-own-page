
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Exp from './pages/Exp/Exp';
import Main from "./pages/Main/Main";




function App() {

  const location = useLocation()
  const isMainPath = location.pathname==="/"

  return (
    <div className="App">
      {!isMainPath && <Header />}
      <Switch>
      <Route path={"/"} exact>
            <Main />
        </Route>
        <Route path={"/About"}>
            <About />
        </Route>
        <Route path={"/Experience"}>
            <Exp />
        </Route>
        <Route path={"/Contacts"}>
            <Contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
