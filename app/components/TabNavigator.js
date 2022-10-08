import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Home, Login, Admin, Transactions } from '../screens'
import { MaterialIcons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const user = useSelector( state => state.user )

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
            title: "Fruitmark",
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = "storefront"
                } else if (route.name === 'Login') {
                iconName = "login"
                } else if (route.name === 'Transactions') {
                iconName = "swap-horiz"
                } else if (route.name === 'Admin') {
                iconName = "person-outline"
                } else {
                iconName = "crop-square"
                }

                return <MaterialIcons name={iconName} size={24} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "Stores" }} />

            { user && <Tab.Screen name="Transactions" component={Transactions} options={{ tabBarLabel: "Transactions" }} />}

            { user && <Tab.Screen name="Admin" component={Admin} options={{ tabBarLabel: "Admin" }} />}
        
            { !user && <Tab.Screen name="Login" component={Login} options={{ tabBarLabel: "Login" }} />}
        
        </Tab.Navigator>
    )
}

export default TabNavigator
