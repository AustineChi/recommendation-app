import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Job {
    created: string;
    expires: string;
    sourced: string;
    unique: number;
    companyName: string;
    companyUrl: string;
    title: string;
    description: string;
    link: string;
    category: string[];
    location: string;
    country: string;
}

interface JobContextType {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
    currentJob: Job | null;
    setCurrentJob: React.Dispatch<React.SetStateAction<Job | null>>;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobContext = () => {
    const context = useContext(JobContext);
    if (context === undefined) {
        throw new Error('useJobContext must be used within a JobProvider');
    }
    return context;
};

export const JobProvider = ({ children }: { children: ReactNode }) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [currentJob, setCurrentJob] = useState<Job | null>(null);

    return (
        <JobContext.Provider value={{ jobs, setJobs, currentJob, setCurrentJob }}>
            {children}
        </JobContext.Provider>
    );
};
