import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyTasks from '../pages/MyTasks';

const AppNavigation = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppNavigation.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FAEEED'},
    }}>
    <AppNavigation.Screen name="MyTasks" component={MyTasks} />
  </AppNavigation.Navigator>
);

export default AppRoutes;
