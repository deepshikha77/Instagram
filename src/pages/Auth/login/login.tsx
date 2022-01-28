import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/svg/Logo.svg';
import ProfilePic from '../../../assets/images/svg/Oval.svg';
import Button from '../../../components/Buttons/Button';
import {C} from '../../../constants';
import {t} from 'react-native-tailwindcss';
import Footer from '../../../components/signUp/signUp';

const login = ({navigation}: any) => {
  
  const handleLogin = () => {
    navigation.navigate('newAcc');
  };
  return (
    <View style={[t.flex1, t.bgWhite]}>
      <View style={[t.justifyCenter, {marginTop: C.measures.logoTop200}]}>
        <View style={[t.flex, t.wFull, t.itemsCenter]}>
          <Logo style={[{marginBottom: C.measures.margin52}]} />
          <ProfilePic style={[t.mB3]} />
        </View>
        <View>
          <Text
            style={[
              t.fontSemibold,
              t.textSm,
              t.textCenter,
              t.mB3,
              {color: C.colors.blackText, lineHeight: C.measures.lineHeight16},
            ]}>
            Jacob
          </Text>
          <View style={[{paddingHorizontal: C.measures.padding34}]}>
            <Button
              style={{
                marginBottom: C.measures.margin30,
              }}
              handleLogin={handleLogin}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('newAcc')}>
            <Text
              style={[
                t.fontSemibold,
                t.textSm,
                t.textCenter,
                {
                  color: C.colors.primaryBlue,
                  lineHeight: C.measures.lineHeight16,
                },
              ]}>
              Switch accounts
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          t.absolute,
          t.wFull,
          t.borderSolid,
          t.bottom0,
          {
            paddingTop: C.measures.padding18,
            height: C.measures.footerHeight84,
            borderTopColor: C.colors.borderGray,
            borderTopWidth: C.measures.borderWidth,
          },
        ]}>
        <Footer style={{color: C.colors.blackText}} />
      </View>
    </View>
  );
};

export default login;
