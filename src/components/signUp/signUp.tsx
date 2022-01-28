import {View, Text} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import {C} from '../../constants';
const SignUp = (prop: any) => {
  const {style} = prop;
  return (
    <View style={[t.flexRow, t.justifyCenter]}>
      <Text
        style={[
          t.fontNormal,
          t.textXs,
          {color: C.colors.grayText, lineHeight: C.measures.lineheight14},
        ]}>
        Don’t have an account?
      </Text>
      <Text
        style={[
          t.fontSemibold,
          t.textXs,
          {lineHeight: C.measures.lineheight14},style
        ]}>
        Sign up.
      </Text>
    </View>
  );
};

export default SignUp;
