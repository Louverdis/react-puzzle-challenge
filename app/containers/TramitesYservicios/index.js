/*
 *
 * TramitesYservicios
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectTramitesYservicios from './selectors';

export class TramitesYservicios extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Tramites y servicios"
          meta={[
            { name: 'description', content: 'Description of TramitesYservicios' },
          ]}
        />
      </div>
    );
  }
}

TramitesYservicios.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TramitesYServicios: makeSelectTramitesYservicios(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TramitesYservicios);
