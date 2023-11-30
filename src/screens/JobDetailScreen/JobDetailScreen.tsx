// JobDetailScreen.tsx
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, ScrollView, ActivityIndicator, Linking } from 'react-native';
import useJob from '../../Hooks/useJob';
import { RootStackParamList } from '../../models/navigationModel';
import styles from './styles';

export type JobDetailScreenProps = StackScreenProps<RootStackParamList, 'JobDetail'>;


const JobDetailScreen: React.FC<JobDetailScreenProps> = ({ route }) => {
    const { uniqueId } = route.params;
    const { job, isLoading, error } = useJob(uniqueId);

    if (isLoading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>Error loading job details.</Text>;
    }

    if (!job) {
        return <Text>No job found.</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.companyName}>{job.companyName}</Text>
            {job.description && <Text style={styles.description}>{job.description}</Text>}
            {job.location && <Text style={styles.detail}>Location: {job.location}</Text>}
            {job.country && <Text style={styles.detail}>Country: {job.country}</Text>}
            {job.category && <Text style={styles.detail}>Category: {job.category.join(', ')}</Text>}
            {job.created && <Text style={styles.detail}>Posted: {job.created}</Text>}
            {job.expires && <Text style={styles.detail}>Expires: {job.expires}</Text>}
            {job.link && (
                <Text style={styles.link} onPress={() => Linking.openURL(job.link)}>
                    Job Link
                </Text>
            )}
        </ScrollView>
    );
};

export default JobDetailScreen;
