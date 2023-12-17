import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from '../services/api/authApi';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for token in storage and validate it
        const loadStoredUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.log('Failed to retrieve user:', error);
            }
        };

        loadStoredUser();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const userData = await authApi.login(email, password); 
            setUser(userData);
            setIsAuthenticated(true);
            await AsyncStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage
        } catch (error) {
            console.error('Login failed:', error);
            throw error; // Re-throw the error for handling in the login component
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user'); // Remove user data from local storage
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
