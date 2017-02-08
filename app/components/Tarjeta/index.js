/**
*
* Tarjeta
*
*/

import React from 'react';
// import styled from 'styled-components';


class Tarjeta extends React.Component {
  render() {
    const { texto, imgSrc } = this.props;
    return (
      <div>
        <img role="presentation" src={imgSrc} />
        <span>{texto}</span>
      </div>
    );
  }
}

Tarjeta.propTypes = {
  texto: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
};

export default Tarjeta;
