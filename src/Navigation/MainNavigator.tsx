// src/navigation/MainNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import UserDetailsScreen from '../screens/ProfileScreen/ProfileScreen'; // Adjust import path as needed
import AppSettingsScreen from '../screens/AppSettingsScreen/AppSettingsScreen';
import JobDetailScreen from '../screens/JobDetailScreen/JobDetailScreen'; // Import JobDetailScreen
import SearchScreen from '../screens/SearchScreen/SearchScreen'; // Import SearchScreen
import SavedJobsScreen from '../screens/SavedJobsScreen/SavedJobsScreen'; // Import SavedJobsScreen
import { RootStackParamList } from '../models/navigationModel';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
            <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
            <Stack.Screen name="AppSettings" component={AppSettingsScreen} />
            <Stack.Screen name="JobDetail" component={JobDetailScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;

