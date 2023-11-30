import React from 'react';
import { View } from 'react-native';
import { useForm, FieldErrors } from 'react-hook-form';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './style';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const CreateUserForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>();
    const typedErrors: FieldErrors<CreateUserFormData> = errors; // Typed errors

    const onSubmit = (data: CreateUserFormData) => {
        console.log(data);
    };

    return (
        <View style={styles.formContainer}>
            <TextInput 
                name="name" 
                control={control} 
                placeholder="Name"
                rules={{ required: 'Name is required' }}
                errorMessage={typedErrors.name?.message}
            />
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
            <TextInput 
                name="confirmPassword" 
                control={control} 
                placeholder="Confirm Password"
                secureTextEntry
                rules={{
                    required: 'Confirm your password',
                    validate: (value: any )=> 
                        value === (control as any).getValues('password') || 'Passwords do not match'
                }}
                errorMessage={typedErrors.confirmPassword?.message}
            />
            <Button title="Create Account" onPress={handleSubmit(onSubmit)} style={styles.button} />
        </View>
    );
};

export default CreateUserForm;
