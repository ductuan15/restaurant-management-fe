import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, update } from '../features/profile/profileSlice';
import { Button } from '@mui/material';
import { ThemePalette } from '../app/theme';

const ProfileDisplay = () => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const handleClick = e => {
        const newProfile = {
            id: Math.random(),
            username: Math.random(),
            phoneNumber: Math.random(),
            email: Math.random(),
        };
        dispatch(update(newProfile));
    };

    return (
        <>
            <div>Id: {profile.email}</div>
            <div>Username: {profile.username}</div>
            <div>PhoneNumber: {profile.phoneNumber}</div>
            <Button color={ThemePalette.secondary} onClick={handleClick}>
                Set random profile
            </Button>
        </>
    );
};
export default ProfileDisplay;
