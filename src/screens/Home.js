import React from 'react';
import {View, Text, Button} from 'react-native';

export const Home = (props) => {
  return (
    <View>
      <Text>Sample TExt</Text>
      <Button onPress={() => props.navigation.push('about')} title="About" />
    </View>
  );
};
