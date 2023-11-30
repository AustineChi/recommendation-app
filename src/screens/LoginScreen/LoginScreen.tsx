// LoginScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LoginForm from "../../components/form/LoginForm";
import styles from "./styles";

import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamListModel } from "../../models/authStackParamListModel";

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamListModel,
  "Login"
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <LoginForm />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.footerText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
