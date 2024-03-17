import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Nav from './nav';
import Main from './main';
import Header from './header';

const DashboardLayout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(true);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <>
      <Header onOpenNav={handleNavOpen} />

      <Box
        sx={{
          minHeight: 1,
          display: { xs: 'flex', lg: 'block' },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={isNavOpen} onCloseNav={handleNavClose} />

        <Main>{children}</Main>
      </Box>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
