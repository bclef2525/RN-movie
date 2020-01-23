import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  placeholder?: string;
  keyboardsType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({
  placeholder,
  keyboardsType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardsType ? keyboardsType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#FFFFFF"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

const Container = Styled.View`
    width:100%;
    height:40px;
    padding-left:16px;
    padding-right:16px;
    border-radius:4px;
`;
const InputField = Styled.TextInput`
    flex:1;
    color:#FFFFFF;
`;

export default Input;
