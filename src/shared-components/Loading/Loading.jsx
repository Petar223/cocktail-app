import React from 'react';
import styled, { keyframes } from 'styled-components';

const fillAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: calc(100% - 10px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.blackOverlay};
`;

const Glass = styled.div`
  position: relative;
  width: 100px;
  height: 137px;
  border-left: 4px solid ${({ theme }) => theme.grey[100]};
  border-right: 4px solid ${({ theme }) => theme.grey[100]};
  border-bottom: 4px solid ${({ theme }) => theme.grey[100]};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid ${({ theme }) => theme.grey[100]};
  background: transparent;
`;

const Liquid = styled.div`
  z-index: 12;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, #ff6347, #ffa07a);
  animation: ${fillAnimation} 3s ease-in-out infinite;
`;

const Straw = styled.div`
  position: absolute;
  bottom: -10px;
  right: 52px;
  width: 4px;
  height: 222px;
  background-color: ${({ theme }) => theme.grey[100]};
  border-radius: 2px;
  transform: rotate(-20deg);
  z-index: 1;
`;

const Lemon = styled.div`
  position: absolute;
  top: -13px;
  left: 72px;
  width: 60px;
  height: 29px;
  background: linear-gradient(to right, #fff700, #ffea00);
  border-radius: 30px 30px 0 0;
  border: 2px solid #ffd700;
  transform: rotate(20deg);
  z-index: 12;
  box-shadow:;
`;

const Loading = () => (
  <LoadingContainer>
    <Glass>
      <Liquid />
      <Straw />
      <Lemon />
    </Glass>
  </LoadingContainer>
);

export default Loading;
