// ProfileScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import useUser from '../../Hooks/useUser';
import styles from './styles';

const ProfileScreen: React.FC = () => {
    const { userProfile, fetchUserProfile } = useUser();

    useEffect(() => {
        const fetchAndSetUserProfile = async () => {
            if (userProfile?.id) {
                await fetchUserProfile(userProfile.id);
            }
        };

        fetchAndSetUserProfile();
    }, [fetchUserProfile, userProfile?.id]);

    if (!userProfile) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Profile</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Name: {userProfile.name}</Text>
                <Text style={styles.infoText}>Email: {userProfile.email}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
