import styled from 'styled-components';

const ModalContent = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 32px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export default ModalContent;
