import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Componente para hacer scroll hacia el principio de la pagina cuando se cambia a una nueva Ruta
// solo funciona hacia adelante.
class ScrollToTop extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);