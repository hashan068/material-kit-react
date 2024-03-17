import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

const variantStyles = {
  filled: ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[800],
    backgroundColor: theme.palette.text.primary,
    border: 'none',
  }),
  outlined: ({ theme, ownerState }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.text.primary}`,
  }),
  soft: ({ theme, ownerState }) => ({
    color: theme.palette.text.secondary,
    backgroundColor: alpha(theme.palette.grey[500], 0.16),
    border: 'none',
  }),
};

const colorStyles = ({ theme, ownerState }) => ({
  color: theme.palette[ownerState.color].contrastText,
  backgroundColor: theme.palette[ownerState.color].main,
  border: `2px solid ${theme.palette[ownerState.color].main}`,
});

const softColorStyles = ({ theme, ownerState }) => ({
  color: theme.palette[ownerState.color][theme.palette.mode === 'light' ? 'dark' : 'light'],
  backgroundColor: alpha(theme.palette[ownerState.color].main, 0.16),
  border: 'none',
});

const StyledLabel = styled(Box)(({ theme, ownerState }) => {
  const variantStyle = variantStyles[ownerState.variant];
  const colorStyle = ownerState.color !== 'default' ? (ownerState.variant === 'soft' ? softColorStyles : colorStyles) : {};

  return {
    ...commonStyles,
    ...variantStyle(theme, ownerState),
    ...colorStyle(theme, ownerState),
  };
});

const commonStyles = {
  height: 24,
  minWidth: 24,
  lineHeight: 0,
  borderRadius: 6,
  cursor: 'default',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  justifyContent: 'center',
  textTransform: 'capitalize',
  padding: theme.spacing(0, 0.75),
  fontSize: theme.typography.pxToRem(12),
  fontWeight: theme.typography.fontWeightBold,
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shorter,
  }),
};

export default StyledLabel;
