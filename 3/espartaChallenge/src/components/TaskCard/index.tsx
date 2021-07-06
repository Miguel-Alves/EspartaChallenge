import React from 'react';
import {
  TaskCardContainer,
  CardText,
  TaskDescriptionContainer,
  TaskDescription,
  TaskCardBottom,
  CardButtonText,
  CompleteContainer,
  CardOpenButton,
  CardConcludeButton,
  CardDeleteButton,
} from './styles';
import {TouchableOpacityProps} from 'react-native';

/*
interface TaskCardProps {
  item: object;
  value: boolean;
  onValueChange: Function;
  onPress: Function;
}
*/

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  concluded: boolean;
  title: string;
  description: string;
  exclude: Function;
}
const TaskCard: React.FC<ButtonProps> = ({
  children,
  concluded,
  title,
  description,
  exclude,
  ...rest
}) => (
  <TaskCardContainer>
    <CardText>{title}</CardText>
    <TaskDescriptionContainer>
      <TaskDescription>{description}</TaskDescription>
    </TaskDescriptionContainer>
    <TaskCardBottom>
      <CardDeleteButton onPress={exclude}>
        <CardButtonText>EXCLUIR</CardButtonText>
      </CardDeleteButton>
      <CompleteContainer>
        {concluded ? (
          <CardOpenButton disabled={!concluded} {...rest}>
            <CardButtonText>REABRIR</CardButtonText>
          </CardOpenButton>
        ) : (
          <CardConcludeButton disabled={concluded} {...rest}>
            <CardButtonText>CONCLUIR</CardButtonText>
          </CardConcludeButton>
        )}
      </CompleteContainer>
    </TaskCardBottom>
  </TaskCardContainer>
);

export default TaskCard;
