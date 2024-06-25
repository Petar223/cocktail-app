import styled from 'styled-components';

const HeaderContent = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.grey[100]};
  text-align: left;
  font-size: 2em;
  font-weight: bold;
  text-shadow: 2px 2px 4px ${({ theme }) => theme.blackOverlay};
  padding: 10px;
  border-radius: 8px;
  margin: 32px;
`;

export default HeaderContent;
