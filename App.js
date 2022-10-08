import React from 'react'
import { Provider } from 'react-redux'
import { store } from './state'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './app/components/TabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </NavigationContainer>
  );
}
