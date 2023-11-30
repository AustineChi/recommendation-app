import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { UserProvider } from "./src/context/UserContext";
import { JobProvider } from "./src/context/JobContext";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { useAuth } from "./src/context/AuthContext";
import { View, Text } from "react-native";

const App: React.FC = () => {
  return (

          <NavigationContainer>
            {/* <AppContent /> */}
            <MainNavigator /> 
          </NavigationContainer>

  );
};

// const AppContent: React.FC = () => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
// };

export default App;
