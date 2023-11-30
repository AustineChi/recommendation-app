import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import authApi from '../Services/api/authApi';

const useUser = () => {
    const { userProfile, setUserProfile } = useContext(UserContext);

    const fetchUserProfile = async (userId: string) => {
        try {
            const userDetails = await authApi.getUserDetails(userId);
            setUserProfile(userDetails);
        } catch (error) {
            console.error('Error fetching user profile:', error);
            // Optionally handle the error (e.g., setting an error state)
        }
    };

    return { userProfile, fetchUserProfile, setUserProfile };
};

export default useUser;
