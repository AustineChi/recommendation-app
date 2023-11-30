import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import JobCard from "../../components/JobCard/JobCard";
import useJobs from "../../Hooks/useJobs";
import styles from "./styles";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../models/navigationModel";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomeTabs"
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading jobs</Text>;
  }

  const handlePressJob = (jobId: string) => {
    navigation.navigate("JobDetail", { uniqueId: jobId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Recommended Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            companyName={item.companyName}
            onPress={() => handlePressJob(item.id)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
