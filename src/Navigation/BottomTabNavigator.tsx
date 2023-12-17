// src/navigation/BottomTabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SavedJobsScreen from '../screens/SavedJobsScreen/SavedJobsScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

// Define the type for each tab
type TabItem = {
    name: string;
    component: React.ComponentType<any>;
    icon: string;
};

// Tab configuration array
const tabs: TabItem[] = [
    {
        name: "Home",
        component: HomeScreen,
        icon: "home",
    },
    {
        name: "Saved Jobs",
        component: SavedJobsScreen,
        icon: "bookmark-outline",
    },
    {
        name: "Notifications",
        component: NotificationsScreen,
        icon: "bell-outline",
    },
    {
        name: "Profile",
        component: ProfileScreen,
        icon: "account-circle-outline",
    },
];


const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator>
            {tabs.map(({ name, component, icon }) => (
                <Tab.Screen 
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name={icon} color={color} size={size} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
