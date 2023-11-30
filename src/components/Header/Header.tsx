import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './styles';

interface HeaderProps {
    title: string;
    onSearchPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSearchPress }) => {
    return (
        <Appbar.Header 
            style={styles.header} 
            statusBarHeight={Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}
        >
            {onSearchPress && <Appbar.Action icon="magnify" onPress={onSearchPress} />}
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default Header;

