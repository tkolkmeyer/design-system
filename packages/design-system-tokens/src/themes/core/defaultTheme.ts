import { color, spacing } from '../../tokens';
import { ThemeTokens } from '../../lib/types';

const makeTheme = <T extends ThemeTokens>(value: T) => {
  return value;
};

const DefaultTheme = makeTheme({
  description: 'Default CMSDS Core Theme',
  color: {
    'color-white': color.white,
    'color-base': color['granite-900'],
    'color-black': color.black,
    'color-gray-dark': color['granite-800'],
    'color-gray': color['granite-700'],
    'color-gray-medium': color['granite-600'],
    'color-gray-light': color['granite-300'],
    'color-gray-lighter': color['granite-100'],
    'color-gray-lightest': color['granite-50'],
    'color-gray-warm-dark': color['granite-700'],
    'color-gray-warm-light': color['granite-50'], // same as lightest?
    'color-gray-cool-light': color['ocean-50'],
    'color-primary': color['ocean-500'],
    'color-primary-darker': color['ocean-700'],
    'color-primary-darkest': color['ocean-800'],
    'color-primary-alt': color['sky-500'],
    'color-primary-alt-dark': color['sky-700'],
    'color-primary-alt-darkest': color['sky-800'],
    'color-primary-alt-light': color['sky-300'],
    'color-primary-alt-lightest': color['sky-50'],
    'color-red': color['rose-500'],
    'color-red-dark': color['rose-600'],
    'color-red-darker': color['rose-700'],
    'color-red-darkest': color['rose-800'],
    'color-red-light': color['rose-400'],
    'color-red-lighter': color['rose-200'],
    'color-red-lightest': color['rose-50'],
    'color-gold': color['goldenrod-500'],
    'color-gold-dark': color['goldenrod-600'],
    'color-gold-darker': color['goldenrod-700'],
    'color-gold-darkest': color['goldenrod-800'],
    'color-gold-light': color['goldenrod-400'],
    'color-gold-lighter': color['goldenrod-200'],
    'color-gold-lightest': color['goldenrod-50'],
    'color-green': color['spring-500'],
    'color-green-dark': color['spring-600'],
    'color-green-darker': color['spring-700'],
    'color-green-darkest': color['spring-800'],
    'color-green-light': color['spring-400'],
    'color-green-lighter': color['spring-200'],
    'color-green-lightest': color['spring-50'],
    'color-cool-blue': color['dark-sky-700'],
    'color-cool-blue-light': color['dark-sky-500'],
    'color-cool-blue-lighter': color['dark-sky-300'],
    'color-cool-blue-lightest': color['dark-sky-50'],
    'color-muted-inverse': color['granite-200'],
    'color-focus': color['dark-sky-500'],
    'color-focus-inverse': color['sky-300'],
    'focus-color': color['goldenrod-300'],
    'focus-color-inverse': color['goldenrod-300'],
    'focus-border-inverse': color['goldenrod-800'],
    'color-focus-light': color.white,
    'color-focus-dark': color['orchid-500'],
    'color-visited': color['windsor-500'],
    // below all reference colors used above, possible remapping in scss
    'color-error': color['rose-500'],
    'color-error-dark': color['rose-600'],
    'color-error-darker': color['rose-700'],
    'color-error-darkest': color['rose-800'],
    'color-error-light': color['rose-400'],
    'color-error-lighter': color['rose-200'],
    'color-error-lightest': color['rose-50'],
    'color-warn': color['goldenrod-500'],
    'color-warn-dark': color['goldenrod-600'],
    'color-warn-darker': color['goldenrod-700'],
    'color-warn-darkest': color['goldenrod-800'],
    'color-warn-light': color['goldenrod-400'],
    'color-warn-lighter': color['goldenrod-200'],
    'color-warn-lightest': color['goldenrod-50'],
    'color-success': color['spring-500'],
    'color-success-dark': color['spring-600'],
    'color-success-darker': color['spring-700'],
    'color-success-darkest': color['spring-800'],
    'color-success-light': color['spring-400'],
    'color-success-lighter': color['spring-200'],
    'color-success-lightest': color['spring-50'],
    'color-muted': color['granite-700'],
    'color-base-inverse': color.white,
    'color-background': color.white,
    'color-background-inverse': color['ocean-800'],
    'color-background-dialog': color.white,
    'border-color': color['granite-100'],
    'border-color-dark': color['granite-800'],
    'border-color-inverse': color.white,
  },
  spacing: { ...spacing },
  // placeholder for now to satisfy typing
  components: [
    {
      button: {
        'button-style-example': color.white,
        'button-spacing-top': spacing['spacer-2'],
      },
    },
  ],
});

export default DefaultTheme;
