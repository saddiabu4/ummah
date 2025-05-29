import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  Paper,
} from "@mui/material";

// Rasm sifatida import qilamiz
import googleIcon from "../../../assets/google-logo.png";
import githubIcon from "../../../assets/github-logo.png";

const SignInPage = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={6} sx={{ padding: 4, width: "100%", borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Welcome user, please sign in to continue
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <img src={githubIcon} alt="GitHub" style={{ width: 20, height: 20 }} />
            }
            sx={{
              mb: 2,
              borderColor: "#ccc",
              textTransform: "none",
            }}
          >
            Sign In With GitHub
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <img src={googleIcon} alt="Google" style={{ width: 20, height: 20 }} />
            }
            sx={{
              mb: 2,
              borderColor: "#ccc",
              textTransform: "none",
            }}
          >
            Sign In With Google
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>Or</Divider>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, background: "linear-gradient(to right, #000000, #434343)" }}
          >
            Sign In With Email And Password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignInPage;