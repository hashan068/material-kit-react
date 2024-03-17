import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Link, Card, Stack, Button, Divider, TextField, Typography, IconButton, LoadingButton } from '@mui/material';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    router.push('/dashboard');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          width: 120,
          height: 36,
          marginTop: 2,
          marginLeft: 2,
          alt: 'Minimal Logo',
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            minWidth: 320,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" marginTop={2}>
            Sign in to Minimal
          </Typography>

          <Typography variant="body2" marginBottom={3}>
            Don’t have an account?{' '}
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              aria-label="Google sign-in"
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" title="Google sign-in" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              aria-label="Facebook sign-in"
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" title="Facebook sign-in" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              aria-label="Twitter sign-in"
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" title="Twitter sign-in" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          <form onSubmit={handleFormSubmit} id="login-form">
            <Stack spacing={3} marginBottom={3}>
              <Stack direction="row" alignItems="center">
                <TextField
                  id="email-input"
                  name="email"
                  label="Email address"
                  InputLabelProps={{ shrink: true }}
                />
              </Stack>

              <Stack direction="row" alignItems="center">
                <TextField
                  id="password-input"
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                           
