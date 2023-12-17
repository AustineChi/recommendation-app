import { useQuery } from 'react-query';
import jobsApi from '../services/api/jobsApi';

const useJobs = () => {
    return useQuery('jobs', jobsApi.fetchJobs);
};

export default useJobs;
