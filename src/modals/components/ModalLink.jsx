import styled from 'styled-components';

const ModalLink = styled.a`
  color: ${({ theme }) => theme.blueAccent[500]};
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default ModalLink;
