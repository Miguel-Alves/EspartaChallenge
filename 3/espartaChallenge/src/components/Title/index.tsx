import React from 'react';
import {TextProps} from 'react-native';
import {Container, TitleText} from './styles';

interface TitleProps extends TextProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({children, ...rest}) => (
  <Container>
    <TitleText {...rest}>{children}</TitleText>
  </Container>
);

export default Title;
