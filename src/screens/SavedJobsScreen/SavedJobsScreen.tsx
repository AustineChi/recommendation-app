// SavedJobsScreen.tsx
import React from "react";
import { View, Text, FlatList } from "react-native";
import JobCard from "../../components/JobCard/JobCard";
import { Job } from "../../models/jobModel";
import styles from "./styles";

const SavedJobsScreen: React.FC = () => {
  // Placeholder for saved jobs - replace with actual data fetching logic
  const savedJobs: Job[] = [
    {
      unique: 1,
      title: "Software Engineer",
      companyName: "Tech Company",
      location: "NY",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Saved Jobs</Text>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.unique as any}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            companyName={item.companyName}
            location={item.location}
          />
        )}
      />
    </View>
  );
};

export default SavedJobsScreen;
