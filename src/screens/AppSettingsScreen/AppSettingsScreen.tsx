// AppSettingsScreen.tsx
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from './styles';

const AppSettingsScreen: React.FC = () => {
    // Example state for a dark theme switch
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Dark Theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}
                />
            </View>
            {/* Add more settings items here */}
        </View>
    );
};

export default AppSettingsScreen;
