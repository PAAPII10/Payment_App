import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

//screens
import {SignUp} from './screens';

import Tab from './navigation/Tab';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignUp'}>
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* Tab */}
        <Stack.Screen name="Home" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
