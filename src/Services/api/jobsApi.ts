import axios from 'axios';

const API_URL = 'https://zobjobs.com/api/jobs';

// Fetch a list of jobs
const fetchJobs = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data.jobs;
};

export default {
    fetchJobs,
};
