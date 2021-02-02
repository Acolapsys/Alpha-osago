/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      mobile: { min: '376px' },
      tablet: { min: '768px' },
      md: { min: '1024px' },
      lg: { min: '1280px' },
      'mobile-max': { max: '375px' },
      'tablet-max': { max: '767px' },
      'md-max': { max: '1023px' },
      'lg-max': { max: '1279px' }
    },
    container: {
      center: true,
      padding: {
        default: '20px'
      }
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      grey: '#F6F6F6',
      wires: '#088DED',
      brand1: '#038661',
      brand2: '#FDB215',
      red: '#D73E29',
      background2: '#221122',
      lightgreen: '#EBF7F3',
      dark100: '#000000',
      dark80: '#4D4D4D',
      dark50: '#808080',
      dark30: '#B3B3B3',
      dark20: '#CCCCCC',
      dark10: '#E6E6E6',
      dark06: '#F0F0F0',
      positive: '#4BB970',
      warning: '#DB9F04',
      negative: '#D34444',
      neutral: '#9B9595',
      primary: '#088DED'
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      sm: '14px',
      base: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      26: '26px',
      36: '36px'
    },
    spacing: {
      'negative-10': '-10px',
      'negative-15': '-15px',
      'negative-18': '-18px',
      'negative-60': '-60px',
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      19: '19px',
      20: '20px',
      22: '22px',
      23: '23px',
      24: '24px',
      25: '25px',
      26: '26px',
      27: '27px',
      28: '28px',
      30: '30px',
      32: '32px',
      33: '33px',
      34: '34px',
      35: '35px',
      37: '37px',
      40: '40px',
      45: '45px',
      50: '50px',
      55: '55px',
      57: '57px',
      60: '60px',
      65: '65px',
      67: '67px',
      70: '70px',
      72: '72px',
      74: '72px',
      80: '80px',
      100: '100px',
      125: '125px',
      140: '140px',
      150: '150px'
    },
    maxWidth: {
      none: 'none',
      full: '100%',
      '50p': '50%',
      '7/12': '58.333333%',
      '8/12': '64.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      47: '47px',
      148: '148px',
      167: '167px',
      183: '183px',
      200: '200px',
      247: '247px',
      236: '236px',
      254: '254px',
      282: '282px',
      305: '305px',
      315: '315px',
      354: '354px',
      362: '362px',
      480: '480px',
      575: '575px',
      600: '600px',
      650: '650px',
      660: '660px',
      700: '700px',
      900: '900px'
    },
    maxHeight: {
      0: '0',
      47: '47px',
      72: '72px',
      82: '82px',
      full: '100%'
    },
    height: {
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      13: '13px',
      14: '14px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      25: '25px',
      30: '30px',
      40: '40px',
      44: '44px',
      45: '45px',
      47: '47px',
      48: '48px',
      50: '50px',
      52: '52px',
      55: '55px',
      60: '60px',
      80: '80px',
      82: '82px',
      100: '100px',
      135: '135px',
      145: '145px',
      175: '175px',
      240: '240px',
      350: '350px',
      full: '100%',
      screen: '100vh',
      auto: 'auto'
    },
    borderRadius: {
      full: '50%',
      none: '0',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      13: '13px',
      14: '14px',
      15: '15px',
      20: '20px',
      25: '25px',
      31: '31px',
      32: '32px',
      39: '39px',
      41: '41px',
      52: '52px'
    },
    borderColor: theme => ({
      ...theme('colors')
    }),
    borderWidth: {
      DEFAULT: '1px',
        '3': '3px',
    },
    zIndex: {
      negative: -1,
      bubble: 2,
      'sticky-header': 4,
      'loading-overlay': 5,
      overlay: 6,
      modal: 7,
      'super-overlay': 8,
      notification: 9,
      'dropdown-notification': 10
    },
    extend: {
      opacity: {
        10: '0.1',
        95: '0.95'
      },
      width: {
        full: '100%',
        4: '4px',
        8: '8px',
        13: '13px',
        15: '15px',
        16: '16px',
        17: '17px',
        20: '20px',
        25: '25px',
        40: '40px',
        30: '30px',
        44: '44px',
        45: '45px',
        47: '47px',
        48: '48px',
        52: '52px',
        80: '80px',
        130: '130px',
        145: '145px',
        154: '154px',
        200: '200px',
        235: '235px',
        265: '265px',
        271: '271px',
        280: '280px',
        295: '295px',
        310: '310px',
        315: '315px',
        320: '320px',
        350: '350px',
        390: '390px',
        400: '400px',
        422: '422px',
        480: '480px',
        513: '513px',
        500: '500px',
        600: '600px',
        maxContent: 'max-content'
      },
      minWidth: {
        30: '30px',
        47: '47px',
        70: '70px',
        254: '254px',
        390: '390px',
        '3-4': '75%'
      },
      minHeight: {
        14: '14px',
        42: '42px',
        47: '47px',
        178: '178px'
      },
      lineHeight: {
        10: '10px',
        20: '20px',
        26: '26px',
        36: '36px'
      },
      gridTemplateColumns: {
        '2-fr': 'repeat(2, minmax(275px, 1fr))',
        '2-400': 'repeat(2, minmax(275px, 400px))',
        '2-250': 'repeat(2, minmax(140px, 250px))',
        '1-400': 'repeat(1, minmax(275px, 400px))',
        '2-266': 'repeat(2, minmax(266px, 1fr), offset)'
      },
      gridTemplateRows: {
        200: '200px'
      },
      inset: {
        10: '10px',
        20: '20px',
        23: '23px',
        39: '39px',
        80: '80px',
        90: '90px',
        120: '120px'
      },
      rotate: {
        225: '225deg'
      }
    }
  },
  variants: {
    outline: ['focus', 'responsive', 'hover'],
    borderColor: ['focus', 'responsive', 'hover'],
    maxWidth: ['focus', 'responsive', 'hover']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
