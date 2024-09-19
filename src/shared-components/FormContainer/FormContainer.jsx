import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.grey[900]};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px ${({ theme }) => theme.blackOverlay};
  color: ${({ theme }) => theme.grey[900]};
  border: 2px solid
    ${({ theme }) =>
      theme.mode === 'dark' ? theme.grey[900] : theme.grey[100]};
`;

export default FormContainer;
