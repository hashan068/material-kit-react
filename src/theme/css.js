import { alpha } from '@mui/material/styles';
import { dividerClasses } from '@mui/material/Divider';
import { checkboxClasses } from '@mui/material/Checkbox';
import { menuItemClasses } from '@mui/material/MenuItem';
import { autocompleteClasses } from '@mui/material/Autocomplete';

// ----------------------------------------------------------------------

const bgBlur = ({ color = '#000000', blur = 6, opacity = 0.8, imgUrl }) => ({
  position: 'relative',
  backgroundImage: imgUrl ? `url(${imgUrl})` : undefined,
  '&:before': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  },
});

const bgGradient = ({
  direction = 'to bottom',
  startColor,
  endColor,
  imgUrl,
  color,
}) => ({
  background: imgUrl
    ? `linear-gradient(${direction}, ${startColor || color}, ${
        endColor || color
      }), url(${imgUrl})`
    : `linear-gradient(${direction}, ${startColor}, ${endColor})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
});

const textGradient = (value) => ({
  background: `-webkit-linear-gradient(${value})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const hideScroll = {
  x: {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  y: {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};

// ----------------------------------------------------------------------

export const paper = ({ theme, bgcolor, dropdown }) => ({
  ...bgBlur({
    blur: 20,
    opacity: 0.9,
    color: theme.palette.background.paper,
    ...(bgcolor && {
      color: bgcolor,
    }),
    imgUrl: '/assets/combined-blur.png',
  }),
  backgroundImage: 'url(/assets/cyan-blur.png), url(/assets/red-blur.png)',
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundPosition: 'top right, left bottom',
  backgroundSize: '50%, 50%',
  ...(theme.direction === 'rtl' && {
    backgroundPosition: 'top left, right bottom',
  }),
  ...(dropdown && {
    padding: theme.spacing(0.5),
    boxShadow: theme.customShadows.dropdown,
    borderRadius: theme.shape.borderRadius * 1.25,
  }),
});

// ----------------------------------------------------------------------

export const menuItem = (theme) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.75, 1),
  borderRadius: theme.shape.borderRadius * 0.75,
  '&:not(:last-of-type)': {
    marginBottom: 4,
  },
  [`&.${menuItemClasses.selected}`]: {
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  [`& .${checkboxClasses.root}`]: {
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(0.5),
  },
  [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  [`&+.${dividerClasses.root}`]: {
    margin: theme.spacing(0.5, 0),
  },
});

// ----------------------------------------------------------------------

export const HideScroll = (props) => {
  const { direction, children } = props;
  return direction === 'x' ? (
    <div style={hideScroll.x}>{children}</div>
  ) : direction === 'y' ? (
    <div style={hideScroll.y}>{children}</div>
  ) : (
    children
  );
};

// ----------------------------------------------------------------------
