// SearchScreen.tsx
import React, { useState, useMemo } from "react";
import {
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import JobCard from "../../components/JobCard/JobCard";
import useJobs from "../../Hooks/useJobs";
import styles from "./styles";

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: jobs, isLoading, error } = useJobs(); // Fetching jobs using useJobs hook

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredJobs = useMemo(() => {
    return jobs?.filter(
      (job: any) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [jobs, searchQuery]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading jobs</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search jobs..."
      />
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.unique.toString()}
        renderItem={({ item }) => (
          <JobCard title={item.title} companyName={item.companyName} />
        )}
      />
    </View>
  );
};

export default SearchScreen;
