import styled from 'styled-components';

const TypeTaglineLarger = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-shadow: 2px 2px 4px ${({ theme }) => theme.blackOverlay};
  padding: 0 0 32px 0;
`;

export default TypeTaglineLarger;
