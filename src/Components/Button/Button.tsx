import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  label: string;
  style?: object;
  onPress?: () => void;
}

const Button = ({label, style, onPress}: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label>{label}</Label>
    </StyleButton>
  );
};

const StyleButton = Styled.TouchableOpacity`
    width:100%;
    height:40px;
    border-radius:4px;
    justify-content:center;
    align-items:center;
    border:1px;
    border-color:#333333;
`;
const Label = Styled.Text`
    color:#FFFFFF;
`;

export default Button;
