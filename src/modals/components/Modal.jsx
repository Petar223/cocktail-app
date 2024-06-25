import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.blackOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export default Modal;
