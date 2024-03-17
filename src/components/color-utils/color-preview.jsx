import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function ColorPreview({ colors = [], limit = 3, sx }) {
  if (!Array.isArray(colors)) {
    console.error('Colors must be an array');
    return null;
  }

  const renderColors = colors.slice(0, limit);

  const remainingColor = colors.length - limit;

  return (
    <Stack key="color-preview" component="span" direction="row" alignItems="center" justifyContent="flex-end" sx={sx}>
      {renderColors.map((color, index) => (
        <Box
          key={color + index}
          sx={{
            ml: -0.75,
            width: 16,
            height: 16,
            bgcolor: color,
            borderRadius: '50%',
            border: (theme) => `solid 2px ${theme.palette.background.paper}`,
            boxShadow: (theme) => `inset -1px 1px 2px ${alpha(theme.palette.common.black, Number.parseFloat(0.24.toFixed(2)))}`,
          }}
        />
      ))}

      {colors.length > limit && (
        <Box component="
