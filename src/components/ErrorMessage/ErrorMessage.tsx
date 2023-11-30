import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface ErrorMessageProps {
  message: string;
  visible: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, visible }) => {
  if (!visible || !message) return null;

  return <Text style={styles.errorText}>{message}</Text>;
};

export default ErrorMessage;
