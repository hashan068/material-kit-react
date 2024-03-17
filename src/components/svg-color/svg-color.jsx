import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const SvgColor = forwardRef(({ src = '', sx = {}, ref, ...other }, ref) => {
  const validSx =
    typeof sx === 'object' &&
    !(Array.isArray(sx) && sx.some(value => typeof value !== 'object'));

  return (
    <Box
      component="span"
      className="svg-color"

