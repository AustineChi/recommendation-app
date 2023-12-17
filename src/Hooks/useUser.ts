import { useUser as useUserContext }  from '../context/UserContext';
import authApi from '../services/api/authApi';

const useUser = () => {
    const { userProfile, setUserProfile } = useUserContext();

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
