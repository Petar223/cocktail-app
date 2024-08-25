import styled from 'styled-components';

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1) saturate(1.2);
  }

  &:active {
    transform: scale(0.97);
    filter: brightness(0.8);
  }
`;

export default ItemImage;
