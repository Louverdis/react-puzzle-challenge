/**
*
* Contador
*
*/

import React from 'react';
// import styled from 'styled-components';


class Contador extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    // Unicamente usar this.state en CONSTRUCTOR
    this.state = {
      valorActual: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { valorActual } = this.state;
    this.setState({
      valorActual: valorActual + 1,
    });
  }

  render() {
    const { valorActual } = this.state;
    return (
      <div>
        <span onClick={this.handleClick}>{valorActual}</span>
      </div>
    );
  }
}

Contador.propTypes = {

};

export default Contador;
