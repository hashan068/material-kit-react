import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useResponsive } from 'src/hooks/use-responsive';
import { NAV, HEADER } from './config-layout';

// Define the SPACING constant
const SPACING = 8;

// Define the Main component with defaultProps
const Main = ({ children, sx = {}, ...other }) => {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      sx={{
        // Set the flexGrow and minHeight properties
        flexGrow: 1,
        minHeight: 1,
        // Set the display, flexDirection, and padding properties
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        // If lgUp is true, set the paddingLeft, paddingRight, and paddingTop properties
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        // Merge the provided sx prop with the default styles
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

// Set the propTypes for the Main component
Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

// Set the defaultProps for the Main component
Main.defaultProps = {
  children: null,
