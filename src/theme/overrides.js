import { alpha, createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

type CustomOverrides = Partial<ThemeOptions>;

export function overrides(theme: Theme): CustomOverrides {
  return {
    components: {
      // Extend existing theme mixins
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box',
          },
          // ...
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: alpha(theme.palette.grey[900], 0.8),
          },
          invisible: {
            background: 'transparent',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedInherit: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[800],
            '&:hover': {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.grey[800],
            },
          },
          sizeLarge: {
            minHeight: 48,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: theme.customShadows.card,
            borderRadius: Number(theme.shape.borderRadius) * 2,
            position: 'relative',
            zIndex: 0, // Fix Safari overflow: hidden with border radius
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: { variant: 'h6' },
          subheaderTypographyProps: { variant: 'body2' },
        },
        styleOverrides: {
          root: {
            padding: theme.spacing(3, 3, 0),
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: alpha(theme.palette.grey[500], 0.24),
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.background.neutral,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: theme.palette.grey[800],
          },
          arrow: {
            color: theme.palette.grey[800],
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          paragraph: {
            marginBottom: theme.spacing(2),
          },
          gutterBottom: {
            marginBottom: theme.spacing(1),
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            ...theme.typography.body2,
          },
        },
      },
      // Add new overrides
      MuiLink: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
      MuiTableSortLabel: {
        styleOverrides: {
          root: {
            '& svg': {
              color: theme.palette.text.secondary,
            },
          },
        },
      },
      MuiTablePagination: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2),
          },
          actions: {
            justifyContent: 'flex-end',
          },
          selectLabel: {
            marginRight: theme.spacing(2),
          },
        },
      },
    },
  };
}

// Example usage
const theme = createTheme({
  // ...
  overrides: overrides,
});
