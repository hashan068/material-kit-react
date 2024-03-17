import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

type TitleAccessProp = string | null | undefined;

interface IconifyProps {
  icon: JSX.Element | string;
  width?: number;
  height?: number;
  sx?: any;
  titleAccess?: TitleAccessProp;
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(({ icon, width = 20, height = 20, sx, titleAccess, ...other }, ref) => {
  const IconComponent = typeof icon === 'string' ? Icon : icon;

  return (
    <Box
      ref={ref}
      as={IconComponent}
      className="component-iconify"
      icon={icon}
      sx={{ width, height, ...sx, viewBox: '0 0 24 24', ...(titleAccess && { titleAccess }) }}
      {...other}
    />
  );
});

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  sx: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  titleAccess: PropTypes.
