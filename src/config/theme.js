import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E213A',
      mainBlue: '#3C47E9',
      blueDark: '#100E1D',
      lightBlue: '#585676',
      yellow: '#FFEC65',
      gray: '#6E707A',
      graySecondary: '#A09FB1',
      lightGray: '#E7E7EB',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Raleway',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
