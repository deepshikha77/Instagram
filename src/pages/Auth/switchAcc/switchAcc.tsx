import {View, Text} from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/svg/Logo.svg';
import {t} from 'react-native-tailwindcss';
import Input from '../../../components/formikFields/input.tsx/Input';
import {C} from '../../../constants';
import Icon from '../../../assets/images/svg/fbIcon.svg';
import SignUp from '../../../components/signUp/signUp';
import Back from '../../../assets/images/svg/Back.svg';
const SwitchAcc = ({navigation}: any) => {
 
  return (
    <View style={[t.flex1, t.bgWhite]}>
      <Back style={[t.pX4]} onPress={() => navigation.navigate('login')} />
      <View style={[t.flex1, t.itemsCenter]}>
        <Logo style={[{marginTop: C.measures.logoTop80}]} />
        <View
          style={[
            t.pX4,
            C.measures.button,
            t.wFull,
            t.flex1,
            {marginTop: C.measures.margin38},
          ]}>
          <Input
            style={[t.wFull,{
              backgroundColor: C.colors.light,
              borderColor: C.colors.inputBorder,
              borderWidth: C.measures.borderWidth,
            }]}
          />
          <View
            style={[
              t.flexRow,
              t.justifyCenter,
              {marginTop: C.measures.margin38},
            ]}>
            <Icon />
            <Text
              style={[
                t.fontSemibold,
                t.textSm,
                {
                  marginLeft: C.measures.margin10,
                  lineHeight: C.measures.lineHeight16,
                  color: C.colors.primaryBlue,
                },
              ]}>
              Log in with Facebook
            </Text>
          </View>
          <View
            style={[
              t.flexRow,
              t.itemsCenter,
              t.wFull,
              t.mT10,
              {marginBottom: C.measures.bottom41},
            ]}>
            <View
              style={[
                t.w2_5,
                t.h0,
                {
                  borderColor: C.colors.lineColor,
                  borderWidth: C.measures.borderWidth,
                },
              ]}
            />
            <Text
              style={[
                t.textXs,
                t.fontSemibold,
                {color: C.colors.grayText, marginHorizontal: 25},
              ]}>
              OR
            </Text>
            <View
              style={[
                t.border2,
                t.borderBlack,
                t.w2_5,
                t.h0,
                {
                  borderColor: C.colors.lineColor,
                  borderWidth: C.measures.borderWidth,
                },
              ]}
            />
          </View>
          <SignUp style={{color: C.colors.primaryBlue}} />
        </View>
        <View
          style={[
            t.absolute,
            t.wFull,
            t.borderSolid,
            t.justifyCenter,
            {
              bottom: 0,
              height: C.measures.footerHeight84,
              borderTopColor: C.colors.borderGray,
              borderTopWidth: C.measures.borderWidth,
            },
          ]}>
          <Text
            style={[
              t.textXs,
              t.fontNormal,
              t.textCenter,
              {lineHeight: C.measures.lineheight14, color: C.colors.grayText},
            ]}>
            Instagram от Facebook
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SwitchAcc;
