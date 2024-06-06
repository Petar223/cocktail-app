import styled from 'styled-components';

const HomeTagline = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 2.5em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  text-align: left;
  line-height: 1.2;
  margin: 0;
  background: rgba(10, 10, 10, 0.5);
  color: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export default HomeTagline;
