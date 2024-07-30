import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
  height: 100%;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}
export default Layout;
