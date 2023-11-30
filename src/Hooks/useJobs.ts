import { useQuery } from 'react-query';
import jobsApi from '../Services/api/jobsApi';

const useJobs = () => {
    return useQuery('jobs', jobsApi.fetchJobs);
};

export default useJobs;
