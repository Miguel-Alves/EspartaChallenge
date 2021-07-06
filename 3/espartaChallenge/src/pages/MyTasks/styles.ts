import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  height: 50px;
  font-size: 28px;
  color: #000000;
  font-family: 'HammerSmithOne-Regular';
  font-weight: bold;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

export const TasksList = styled.FlatList`
  flex: 1;
  width: 90%;
`;
