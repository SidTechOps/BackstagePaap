import {
  createTheme,
  genPageTheme,
  lightTheme,
  shapes,
  palettes,
} from '@backstage/theme';

export const myTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#3c1053',
    },
    warning: {
      main: '#8f5e15',
    },
    info: {
      main: '#34548a',
    },
    success: {
      main: '#485e30',
    },
    background: {
      default: '#eeeeee',
      paper: '#ffffff',
    },
    banner: {
      info: '#34548a',
      error: '#8c4351',
      text: '#ffffff',
      link: '#565a6e',
    },
    errorBackground: '#8c4351',
    warningBackground: '#8f5e15',
    infoBackground: '#ffffff',
    navigation: {
      ...palettes.light.navigation,
      background: '#ffffff',
      color: '#000000',
      indicator: '#000000',
      selectedColor: '#3c1053',
      navItem: {
        hoverBackground: 'rgba(0,0,0,0.2)',
      },
    },
  },
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme({ colors: ['#3c1053', '#3c1053'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#3c1053', '#3c1053'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#3c1053', '#3c1053'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#3c1053', '#3c1053'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#3c1053', '#3c1053'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#3c1053', '#3c1053'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#3c1053', '#3c1053'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#3c1053', '#3c1053'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#3c1053', '#3c1053'], shape: shapes.wave }),
  },
});

