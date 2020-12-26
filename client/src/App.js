import logo from './logo.svg';
import './App.css';

//Allow for rendering of different pages using React Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Home from "./pages/Home";

//Import components

//Import global store

function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home}/>
    </Router>
  );
}

export default App;
