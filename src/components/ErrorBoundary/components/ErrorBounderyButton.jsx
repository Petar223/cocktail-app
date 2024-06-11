import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 12px 40px;
  background-color: #4169e1;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
  }

  &:before {
    top: -5px;
    left: -5px;
    border-top: 2px solid #4169e1;
    border-left: 2px solid #4169e1;
  }

  &:after {
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid #4169e1;
    border-right: 2px solid #4169e1;
  }

  &:hover:before,
  &:hover:after {
    height: 100%;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ErrorBoundaryButton = ({ onClick, children }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>{children}</Button>
    </ButtonWrapper>
  );
};

export default ErrorBoundaryButton;
