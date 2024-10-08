import styled from 'styled-components';

const ModalIngredientItem = styled.li`
  padding: 5px 0;
  border-bottom: ${props =>
    props.$isLast ? 'none' : `1px solid ${props.theme.grey[400]}`};
`;

export default ModalIngredientItem;
