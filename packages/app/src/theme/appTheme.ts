import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

const lightTheme = {
  ...palettes.light,
  primary: {
    main: '#004d40',
  },
  secondary: {
    main: '#f50057',
  },
}

const darkTheme = {
  ...palettes.dark,
  primary: {
    main: '#80cbc4',
  },
  secondary: {
    main: '#f50057',
  },
}

export const appTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...lightTheme,
      ...darkTheme
    }
  }),
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({ colors: ['#3e665d', '#344943'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#b9a49b', '#9b8074'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#9bb9b2', '#779f96'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#9ba2b9', '#747ea2'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#a49bb9', '#8173a4'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#b99bb0', '#905981'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#bc5932', '#a14f2f'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#493e66', '#3a2e4e'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#3f496c', '#38405f'], shape: shapes.wave }),
  },
});
