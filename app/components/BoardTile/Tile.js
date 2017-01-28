import styled from 'styled-components';

const Tile = styled.div`
  flex: 0 0 33.3%;
  background-color: #f6f6f6;
  text-align: center;
  border-bottom: 5px solid #696969;
  border-right: 5px solid #696969;
  border-left: 5px solid #bdbdbd;
  border-top: 5px solid #bdbdbd;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export default Tile;
