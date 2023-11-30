import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Job } from '../../models/jobModel';
import styles from './styles';

interface JobCardProps extends Job {
    onPress?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, companyName, location, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.company}>{companyName}</Text>
            <Text style={styles.location}>{location}</Text>
        </TouchableOpacity>
    );
};

export default JobCard;
