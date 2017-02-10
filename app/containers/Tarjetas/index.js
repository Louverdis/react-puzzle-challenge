/*
 *
 * Tarjetas
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tarjeta from 'components/Tarjeta';
import makeSelectTarjetas from './selectors';
import { seleccionTramite } from './actions';

export class Tarjetas extends React.Component {

  handleClick(tramite) {
    const { dispatch } = this.props;
    dispatch(seleccionTramite(tramite));
  }

  render() {
    const styleTarjeta = { width: '100px' };
    const tramites = [{
      texto: 'primero',
      imgSrc: 'http://lorempixel.com/400/200/',
    }, {
      texto: 'segundo',
      imgSrc: 'http://lorempixel.com/400/200/',
    }];

    /* eslint-disable */
    const tarjetas = tramites.map((tramite) => (
      <a onClick={this.handleClick.bind(this, tramite)}>
        <Tarjeta
          texto={tramite.texto}
          imgSrc={tramite.imgSrc}
          styleImage={styleTarjeta}
        />
      </a>
    ));
    /* eslint-enable */

    return (
      <div>
        {tarjetas}
      </div>
    );
  }
}

Tarjetas.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Tarjetas: makeSelectTarjetas(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tarjetas);
