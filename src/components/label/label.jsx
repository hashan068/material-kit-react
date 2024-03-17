import PropTypes from 'prop-types';
import { forwardRef, useTheme } from 'react';

import Box from '@mui/material/Box';
import { useTheme as useMuiTheme } from '@mui/material/styles';

import { StyledLabel } from './styles';

// ----------------------------------------------------------------------

const Label = forwardRef(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
    const theme = useMuiTheme();

    const iconStyles = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={useTheme}
        {...other}
      >
        {startIcon && (
          <Box
            sx={{ mr: 0.75, ...iconStyles }}
            aria-label={`${startIcon} icon before label text`}
          >
            {startIcon}
          </Box>
        )}

        {children}

        {endIcon && (
          <Box
            sx={{ ml: 0.75, ...iconStyles }}
            aria-label={`${endIcon} icon after label text`}
          >
            {endIcon}
          </Box>
        )}
      </StyledLabel>
