import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from '../features/theme/themeSlice';
import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
    Paper,
    FormGroup,
    FormControlLabel,
    Switch,
    Typography,
} from '@mui/material';
import { getProfile } from '../features/profile/profileSlice';

const ToggleTheme = () => {
    const themeState = useSelector(selectTheme);
    const dispatch = useDispatch();

    const handleGetUserProfile = (e) => {
        dispatch(
            getProfile({
                userId: 1,
            })
        );
    };

    const ToggleSwitch = () => {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                }}
            >
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={themeState.isDarkMode}
                                onChange={() => dispatch(toggleTheme())}
                            />
                        }
                        label="Toggle Theme"
                    />
                </FormGroup>
            </div>
        );
    };

    return (
        <div>
            <Paper
                style={{
                    minHeight: '100vh',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ToggleSwitch />
                <Typography variant="h1">Hello</Typography>
                <Button onClick={handleGetUserProfile} color="secondary">
                    Button
                </Button>
            </Paper>
        </div>
    );
};

export default ToggleTheme;
