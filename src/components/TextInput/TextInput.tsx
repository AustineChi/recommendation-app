import React from 'react';
import { View, TextInput as RNTextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from './styles';

interface TextInputProps {
    name: string;
    control: any;
    rules?: object;
    placeholder?: string;
    secureTextEntry?: boolean;
    errorMessage?: string; // Changed to errorMessage for clarity
}

const TextInput: React.FC<TextInputProps> = ({ 
    name, 
    control, 
    rules = {}, 
    placeholder, 
    secureTextEntry, 
    errorMessage 
}) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RNTextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                    />
                )}
                name={name}
                rules={rules}
                defaultValue=""
            />
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
    );
};

export default TextInput;
