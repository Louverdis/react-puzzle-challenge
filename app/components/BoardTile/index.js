/**
*
* BoardTile
*
*/

import React, { PropTypes } from 'react';

import Tile from './Tile';
import Label from './Label';

class BoardTile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onTileClick, position } = this.props;
    onTileClick(position);
  }

  render() {
    const { label, selected } = this.props;
    return (
      <Tile onClick={this.handleClick}>
        <Label style={{ color: selected ? 'red' : 'black' }}>{label}</Label>
      </Tile>
    );
  }
}

BoardTile.propTypes = {
  label: PropTypes.number,
  position: PropTypes.number,
  selected: PropTypes.bool,
  onTileClick: PropTypes.func,
};

export default BoardTile;
