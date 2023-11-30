import React from 'react';
import { View } from 'react-native';
import { useForm, FieldErrors } from 'react-hook-form';
import styles from './style';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

// If you have a specific type for your form values, use that type instead of 'any'
type LoginFormValues = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
    const typedErrors: FieldErrors<LoginFormValues> = errors; // Typed errors

    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
    };

    return (
        <View style={styles.formContainer}>
            <TextInput 
                name="email" 
                control={control} 
                placeholder="Email"
                rules={{ required: 'Email is required' }}
                errorMessage={typedErrors.email?.message}
            />
            <TextInput 
                name="password" 
                control={control} 
                placeholder="Password"
                secureTextEntry
                rules={{ required: 'Password is required' }}
                errorMessage={typedErrors.password?.message}
            />
            <Button title="Login" onPress={handleSubmit(onSubmit)} style={styles.button} />
        </View>
    );
};

export default LoginForm;
