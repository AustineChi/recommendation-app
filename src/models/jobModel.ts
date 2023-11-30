export interface Job {
    created?: string;
    expires?: string;
    sourced?: string;
    unique?: number;
    companyName?: string;
    companyUrl?: string;
    title: string;
    description?: string;
    link?: string;
    category?: string[];
    location?: string;
    country?: string;
}

export interface JobData {
    jobs: Job[];
}
