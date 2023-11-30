// CreateUserScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import CreateUserForm from '../../components/form/CreateUserForm';
import { AuthStackParamListModel } from '../../models/authStackParamListModel';

type CreateUserScreenNavigationProp = StackNavigationProp<
    AuthStackParamListModel,
    'Register'
>;

interface CreateUserScreenProps {
    navigation: CreateUserScreenNavigationProp;
}

const CreateUserScreen: React.FC<CreateUserScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Create Account</Text>
            <CreateUserForm />
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.footerText}>Already have an account? Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreateUserScreen;
