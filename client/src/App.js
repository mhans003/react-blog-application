import logo from './logo.svg';
import './App.css';

//Allow for rendering of different pages using React Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";

//Import components

//Import global store
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/posts/:id" component={Detail}/>
            <Route exact path="/favorites" component={Favorites}/>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
