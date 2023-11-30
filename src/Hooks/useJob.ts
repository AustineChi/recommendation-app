import { useQuery } from "react-query";
import jobsApi from "../Services/api/jobsApi";

const useJob = (uniqueId: string) => {
  const { data: jobs, ...queryInfo } = useQuery("jobs", jobsApi.fetchJobs);

  const job = jobs?.find(
    ({ unique }: { unique: string }) => unique === uniqueId
  );

  return { job, ...queryInfo };
};

export default useJob;
