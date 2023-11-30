import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

interface Notification {
  id: string;
  title: string;
  message: string;
}

const NotificationsScreen: React.FC = () => {
  // Placeholder for notifications - replace with actual data fetching logic
  const notifications: Notification[] = [
    {
      id: "1",
      title: "New Job Alert",
      message: "A new job in your field has been posted.",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;
