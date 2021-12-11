import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, icons, images, FONTS} from '../constants';

const User = ({navigation}) => {
  function renderButton() {
    return (
      <View style={{margin: SIZES.padding * 3}}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <View>{renderButton()}</View>;
};

export default User;
