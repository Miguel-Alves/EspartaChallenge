import React from 'react';
import {Container, LogoImage} from './styles';
import logoImg from '../../assets/logo.png';

const Logo: React.FC = ({}) => (
  <Container>
    <LogoImage source={logoImg} />
  </Container>
);

export default Logo;
