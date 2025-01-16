import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../assets/MenukuId.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboard');
    }, 3000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008C54',
      }}>
      <Image
        source={Logo}
        style={{
          width: 250,
          height: 100,
        }}
      />
    </View>
  );
};

export default Splash;
