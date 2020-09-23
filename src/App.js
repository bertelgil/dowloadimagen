import React from 'react';
import './App.css';
import Body from './component/body';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const hola1 = () =>(
  <Body/>
);

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={hola1} />
  
    </Switch>
  </Router>
  );
}

export default App;
