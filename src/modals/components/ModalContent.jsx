import styled from 'styled-components';

const ModalContent = styled.div`
  background: ${({ theme }) => theme.grey[900]};
  color: ${({ theme }) => theme.grey[100]};
  padding: 32px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 6px ${({ theme }) => theme.blackOverlay};
  position: relative;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export default ModalContent;
