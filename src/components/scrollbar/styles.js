import React from 'react';
import SimpleBar from 'simplebar-react';

import { alpha, styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

// Define a new styled component for the SimpleBar scrollbar
const StyledScrollbar = styled(SimpleBar)<ButtonProps>(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

// Define a new styled component for the container
const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

// Define the defaultProps for the Button component
const defaultButtonProps = {
  variant: 'contained',
  color: 'primary',
};

// Define the main component
const App = () => {
  return (
    <StyledRootScrollbar>
      <StyledScrollbar>
        {/* Add some buttons to the scrollbar */}
        <Button {...defaultButtonProps}>Button 1</Button>
        <Button {...defaultButtonProps}>Button 2</Button>
        <Button {...defaultButtonProps}>Button 3</Button>
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
};

export default App;
