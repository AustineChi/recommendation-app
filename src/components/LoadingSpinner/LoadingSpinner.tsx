import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const LoadingSpinner = () => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default LoadingSpinner;

