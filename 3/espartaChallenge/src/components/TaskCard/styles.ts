import styled from 'styled-components/native';

export const TaskCardContainer = styled.View`
  width: 100%;
  height: 190px;
  align-items: flex-start;
  justify-content: center;
  background-color: #ffecd6;

  border-radius: 5px;
  border-color: black;
  border: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CardText = styled.Text`
  height: 26px;
  font-size: 22px;
  color: #000000;
  font-family: 'HammerSmithOne-Regular';
  font-weight: bold;
  margin-left: 10px;
`;

export const TaskDescriptionContainer = styled.View`
  width: 95%;
  height: 100px;
  align-self: center;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #ffffff;
  border-color: black;
  border: 1px;
  margin-top: 5px;
`;

export const TaskDescription = styled.Text`
  height: 18px;
  font-size: 12px;
  color: #706b6b;
  font-family: 'HammerSmithOne-Regular';
  font-weight: bold;
`;

export const TaskCardBottom = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const CompleteContainer = styled.View`
  height: 50px;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

export const CardDeleteButton = styled.TouchableOpacity`
  width: 40%;
  height: 28px;
  background: #ff6158;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const CardOpenButton = styled.TouchableOpacity`
  width: 40%;
  height: 28px;
  background: lightblue;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const CardConcludeButton = styled.TouchableOpacity`
  width: 40%;
  height: 28px;
  background: lightgreen;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const CardButtonText = styled.Text`
  color: #000000;
  font-family: 'HammerSmithOne-Regular';
  font-weight: bold;
  font-size: 12px;
`;
