import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding-top: 42px;
`;

function Layout({ children }) {
  return (
    <div>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </div>
  );
}
export default Layout;
