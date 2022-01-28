import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {t} from 'react-native-tailwindcss';
import {C} from '../../../constants';
import Button from '../../Buttons/Button';
const Input = (prop: any) => {
  const initialValues = {
    userName: '',
    password: '',
  };
  const style = prop.style;
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: any) => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              value={values.userName}
              placeholder="Username"
              style={[style,C.measures.button,t.borderSolid, t.mB3, {paddingLeft: C.measures.padding15}]}
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              style={[style,C.measures.button,t.borderSolid, {paddingLeft: C.measures.padding15}]}
            />
            <Text
              style={[
                t.fontMedium,
                t.textXs,
                t.textRight,
                {
                  lineHeight: C.measures.lineheight14,
                  color: C.colors.primaryBlue,
                  marginTop: C.measures.margin19
                },
              ]}>
              Forget Password?
            </Text>

            <View style={[{marginTop : C.measures.margin30}]}>
              <Button onPress={handleSubmit}/>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Input;
