const theme = {
  colors: {
    dark: '#f2f5f4',  //white
    darkestNavy: '#f2f5f4', //white
    darkNavy: '#f2f5f4', //white
    navy: '#f2f5f4', //white
    lightNavy: '#172a45',  //dark navy
    darkestGrey: '#b3b7c4',
    darkGrey: '#4f576d', //light grey
    mediumGrey: '#5a6988', 
    grey: '#4c5772', 
    lightGrey: '#333f58', //dark grey
    slate: '#4b63ae',
    lightSlate: '#36467c',
    lightestSlate: '#2b375e',
    offWhite: '#000000',
    white: '#000000',
    pink: '#0056ED',
    yellow: '#FFC464',
    orange: '#FF9E64',
    green: '#8eae37',
    blue: '#8CC9C9',
    darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen: 'rgba(102,125,39,1)',
    transNavy: 'rgba(0, 0, 0, 1)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)',
  },


  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xsmall: '14px',
    smallish: '15px',
    small: '16px',
    medium: '18px',
    large: '20px',
    xlarge: '22px',
    xxlarge: '24px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
