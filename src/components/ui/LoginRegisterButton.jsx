import React from 'react';
import { Button, Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const LoginRegisterButtons = (props) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="text"
        startIcon={<LoginIcon />}
        sx={{ textTransform: 'none' }}
        onClick={props.handleSignIn}
      >
        Tizimga kirish
      </Button>
      <Button
        variant="contained"
        startIcon={<PersonAddAltIcon />}
        onClick={props.handleSignUp}
        sx={{
          textTransform: 'none',
          backgroundColor: '#0066ff',
          '&:hover': {
            backgroundColor: '#0052cc',
          },
        }}
      >
        Ro'yxatdan o'tish
      </Button>
    </Stack>
  );
};

export default LoginRegisterButtons;