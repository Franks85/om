import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Transition, TransitionGroup } from "react-transition-group";
import Landing from "./containers/Landing/Landing";
import Rooms from "./containers/Rooms/Rooms";
import Rules from "./containers/Rules/Rules";
import Contacts from './containers/Contacts/Contacts'
import { play, exit } from './Utils/Timelines/timelines';
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route
            render={({ location }) => {
              const { pathname, key } = location;

              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 750, exit: 150 }}
                  >
                    <div>
                    <Switch location={location}>
                      <Route path="/" exact component={Landing} />
                      <Route path="/camere" component={Rooms} />
                      <Route path="/regolamento" component={Rules} />
                      <Route path="/contatti" component={Contacts} />
                    </Switch>
                    <Footer />
                    </div>
                  </Transition>
                </TransitionGroup>
              );
            }}
          />
          
        </BrowserRouter>
          
      </div>
    );
  }
}

export default App;
