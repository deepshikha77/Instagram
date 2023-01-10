import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {C} from '../../constants/index';
import {t} from 'react-native-tailwindcss';
const Button = (prop: any) => {
  const {style, onPress} = prop;
  const handlePress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      style={[
        style,
        t.itemsCenter,
        t.justifyCenter,
        {backgroundColor: C.colors.primaryBlue},
        C.measures.button,
      ]}
      onPress={handlePress}>
      <Text style={[t.fontSemibold, t.textSm, t.textWhite]}>Log in.</Text>
    </TouchableOpacity>
  );
};

export default Button;
