/**
*
* Tarjeta
*
*/

import React from 'react';
// import styled from 'styled-components';


class Tarjeta extends React.Component {
  render() {
    const { texto, imgSrc, styleImage } = this.props;
    return (
      <div>
        <img
          role="presentation"
          src={imgSrc}
          style={styleImage}
        />
        <span>{texto}</span>
      </div>
    );
  }
}

Tarjeta.propTypes = {
  texto: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
  styleImage: React.PropTypes.object,
};

export default Tarjeta;
