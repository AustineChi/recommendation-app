import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    header: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
