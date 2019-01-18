import React, { Component, Fragment } from 'react';
import Home from '../routes/asistentes/containers/home'
import Asistente from '../asistente/components/asistente'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import ScrollToTop from '../commons/scrollToTop'


/**
 * Componente especializado para rutas no encontradas
 * @returns {Component}
 * @constructor
 */
const NoMatch = () => (
    <div>
      <h3>No match!</h3>
    </div>
  );
  

class App extends Component {
    render(){
        return (
            <div>
                Este es un título!
                <div>
                    <Router>
                        <Fragment>
                            <ScrollToTop/>
                            <Switch>
                                <Route path="/" component={Home}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        {/* <Home data={this.props.data}/>  */}
                        {/* <ReduxToastr
                            timeOut={6000}
                            newestOnTop={false}
                            preventDuplicates
                            position="top-right"
                            transitionIn="fadeIn"
                            transitionOut="fadeOut"
                            progressBar
                        /> */}
                        </Fragment>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App