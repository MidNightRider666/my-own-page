
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Switch>
      Hello
      <Route path={"/"} exact>
            <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
