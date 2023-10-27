import { Components, Theme } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: "none",
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    contained: ({ theme: { palette } }) => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      boxShadow: "3px 3px 0px 0px #000",
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: "3px 3px 0px 0px #000",
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        boxShadow: "3px 3px 0px 0px #000",
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: palette.grey[100]
      },
      '&:active': {
        backgroundColor: palette.grey[300]
      }
    }),
    outlined: ({ theme: { palette } }) => ({
      color: palette.grey[50],
      border: `1px solid ${palette.grey[50]}`,
      '&:hover, &:active': {
        border: `1px solid ${palette.grey[300]}`,
        color: palette.grey[300],
      },
    }),
    outlinedSecondary: ({ theme: { palette } }) => ({
      color: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      boxShadow: "0.5px 0.5px 0px 0px #000",
      '&:hover': {
        border: `1px solid ${palette.action.hover}`,
        color: palette.action.hover,
        boxShadow: "0.5px 0.5px 0px 0px #000",
      },
      '&:active': {
        border: `1px solid ${palette.action.selected}`,
        color: palette.action.selected,
        boxShadow: "0.5px 0.5px 0px 0px #000",
      }
    }),
  },
  defaultProps: {
    disableRipple: true
  }
};
