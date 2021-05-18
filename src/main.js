import React from 'react';
import Game from './game';
import Home from './home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import DonutChart from './donutchart';

class Main extends React.Component{
    

    render() {
        return (
            <Router>
              <div>
                <Switch>
                  <Route path="/games/:id" render={(props) => <Game {...props} /> }/>
                  <Route path="/" render={(props) => <Home {...props} /> }/>
                </Switch>
              </div>
            </Router>
          );
        }
    
}





export default Main;