import React from "react";
import { QueryClientProvider } from 'react-query';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import { UserProvider } from "./src/context/UserContext";
import { JobProvider } from "./src/context/JobContext";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import queryClient from "./src/services/queryClient";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <UserProvider>
        <JobProvider>
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </JobProvider>
      </UserProvider>
    </AuthProvider>
    </QueryClientProvider>
  );
};

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default App;
