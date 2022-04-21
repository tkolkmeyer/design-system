/*
 * Medicare.gov Default CMSDS Visual Theme
 */

import { color, font, spacer, radius } from '../../tokens';
import { to, ThemeTokens, ColorTokens } from '../../lib/types';
import { hexOpacity } from '../../lib/utility';

const description = 'Default Medicare.gov Theme';

const themeColors: ColorTokens = {
  // TODO: deprecate these old definitions
  'teal-700': color['teal-700'],
  'teal-500': color['teal-500'],
  'teal-300': color['teal-300'],
  'teal-100': color['teal-100'],
  'blue-700': color['lapis-700'],
  'blue-500': color['lapis-500'],
  'blue-300': color['lapis-300'],
  'blue-100': color['lapis-100'],
  'green-700': color['spring-700'],
  'green-500': color['spring-500'],
  'green-300': color['spring-100'],
  'green-100': color['spring-50'],
  'black-700': color['granite-900'],
  'black-500': color['granite-800'],
  'black-300': color['granite-700'],
  'black-200': color['granite-600'],
  'black-100': color['granite-100'],
  'black-50': color['granite-50'],
  'yellow-700': color['goldenrod-600'],
  'yellow-500': color['goldenrod-500'],
  'yellow-300': color['goldenrod-300'],
  'yellow-100': color['goldenrod-50'],
  'red-700': color['crimson-600'],
  'red-500': color['crimson-500'],
  'red-300': color['crimson-100'],
  'red-100': color['crimson-50'],
  //
  white: color.white,
  black: color.black,
  //
  background: color.white,
  'background-dialog': color.white,
  'background-dialog-mask': hexOpacity('#000000', 50),
  'background-inverse': color['teal-500'],
  //
  base: color['granite-800'],
  'base-inverse': color.white,
  //
  border: color['granite-100'],
  'border-dark': color['lapis-800'],
  'border-inverse': color.white,
  //
  'cool-blue': color['sapphire-600'],
  'cool-blue-light': color['sapphire-500'],
  'cool-blue-lighter': color['sapphire-200'],
  'cool-blue-lightest': color['sapphire-50'],
  //
  error: color['crimson-500'],
  'error-dark': color['crimson-600'],
  'error-darker': color['rose-700'],
  'error-darkest': color['rose-800'],
  'error-light': color['crimson-100'],
  'error-lighter': color['rose-100'],
  'error-lightest': color['crimson-50'],
  //
  focus: color['dark-sky-500'],
  'focus-border-inverse': color['goldenrod-800'],
  'focus-dark': color['orchid-500'],
  'focus-inverse': color['sky-500'],
  'focus-light': color.white,
  'focus-shadow': color['granite-900'],
  'focus-shadow-inverse': color['granite-900'],
  'focus-shadow-link': color['granite-900'],
  'focus-shadow-link-inverse': color['goldenrod-800'],
  //
  gold: color['goldenrod-500'],
  'gold-dark': color['goldenrod-600'],
  'gold-darker': color['goldenrod-700'],
  'gold-darkest': color['goldenrod-800'],
  'gold-light': color['goldenrod-400'],
  'gold-lighter': color['goldenrod-200'],
  'gold-lightest': color['goldenrod-50'],
  //
  gray: color['granite-700'],
  'gray-cool-light': color['ocean-50'],
  'gray-dark': color['granite-800'],
  'gray-darker': color['granite-900'],
  'gray-light': color['granite-600'],
  'gray-lighter': color['granite-100'],
  'gray-lightest': color['granite-50'],
  'gray-medium': color['granite-600'],
  'gray-warm-dark': color['granite-800'],
  'gray-warm-light': color['granite-50'],
  //
  green: color['spring-500'],
  'green-dark': color['spring-700'],
  'green-darker': color['spring-700'],
  'green-darkest': color['spring-800'],
  'green-light': color['spring-700'],
  'green-lighter': color['spring-100'],
  'green-lightest': color['spring-50'],
  //
  muted: color['granite-700'],
  'muted-inverse': color['lapis-50'],
  //
  primary: color['teal-500'],
  'primary-alt': color['lapis-500'],
  'primary-alt-dark': color['lapis-700'],
  'primary-alt-darker': color['lapis-800'],
  'primary-alt-darkest': color['lapis-900'],
  'primary-alt-light': color['lapis-200'],
  'primary-alt-lightest': color['dark-sky-50'],
  'primary-dark': color['teal-700'],
  'primary-darker': color['ocean-800'],
  'primary-darkest': color['ocean-900'],
  'primary-light': color['teal-300'],
  'primary-lightest': color['teal-100'],
  //
  red: color['rose-500'],
  'red-dark': color['rose-600'],
  'red-darker': color['rose-700'],
  'red-darkest': color['rose-800'],
  'red-light': color['rose-200'],
  'red-lighter': color['rose-100'],
  'red-lightest': color['rose-50'],
  //
  secondary: color['lapis-500'],
  'secondary-dark': color['lapis-500'],
  'secondary-darker': color['lapis-500'],
  'secondary-darkest': color['lapis-500'],
  'secondary-light': color['lapis-200'],
  'secondary-lightest': color['dark-sky-50'],
  //
  success: color['spring-500'],
  'success-dark': color['spring-600'],
  'success-darker': color['spring-700'],
  'success-darkest': color['spring-800'],
  'success-light': color['spring-400'],
  'success-lighter': color['spring-200'],
  'success-lightest': color['spring-50'],
  //
  warn: color['goldenrod-500'],
  'warn-dark': color['goldenrod-600'],
  'warn-darker': color['goldenrod-700'],
  'warn-darkest': color['goldenrod-800'],
  'warn-light': color['goldenrod-300'],
  'warn-lighter': color['goldenrod-200'],
  'warn-lightest': color['goldenrod-50'],
  //
  visited: color['crimson-800'],
};

const components = {
  // alert
  'alert__background-color': themeColors['primary-alt-lightest'],
  'alert__background-color--error': themeColors['error-lightest'],
  'alert__background-color--lightweight': themeColors.white,
  'alert__background-color--success': themeColors['success-lightest'],
  'alert__background-color--warn': themeColors['warn-lightest'],
  'alert__bar-width': spacer[1],
  'alert__border-left-color': themeColors['primary-alt'],
  'alert__border-color--error': themeColors.error,
  'alert__border-color--success': themeColors.success,
  'alert__border-color--warn': themeColors.warn,
  'alert__font-color': themeColors['base'],
  'alert__icon-size': spacer[5],
  alert__padding: spacer[2],
  'alert-link__font-color': themeColors['primary-alt'],
  'alert-link__font-color--hover': themeColors['primary-alt-dark'],
  'alert-link__font-color--focus': themeColors['primary-alt-darkest'],
  'alert-link__font-color--active': themeColors['primary-alt-darkest'],
  // autocomplete
  'autocomplete-list__background-color': themeColors.white,
  'autocomplete-list__border-color': themeColors['gray-lighter'],
  'autocomplete-list-item__font-color': themeColors.primary,
  'autocomplete-list-item__background-color--active': themeColors['primary-alt-darkest'],
  'autocomplete-list-item__font-color--active': themeColors.white,
  'autocomplete-list-item-message__font-color': themeColors.muted,
  // badge
  'badge__background-color': themeColors.gray,
  'badge__font-color': themeColors.white,
  'badge__background-color--alert': themeColors.error,
  'badge__background-color--info': themeColors.primary,
  'badge__background-color--success': themeColors.success,
  'badge__background-color--warn': themeColors.warn,
  'badge__font-color--warn': themeColors.base,
  'badge__border-radius': radius.pill,
  // choice + choicelist
  'choice__background-color': themeColors.background,
  'choice__background-color--checked': themeColors['primary-alt'],
  'choice__background-color--disabled': themeColors['gray-lighter'],
  'choice__background-color--inverse': 'transparent',
  'choice__background-color--disabled--inverse': hexOpacity(themeColors['muted-inverse'], 15),
  'choice__border-color': color['granite-700'],
  'choice__border-color--checked': themeColors['primary-alt'],
  'choice__border-color--disabled': color['granite-300'],
  'choice__border-color--error': themeColors.error,
  'choice__border-color--inverse': themeColors.white,
  'choice__border-color--left': themeColors.primary,
  'choice__border-color--focus': themeColors['primary-darker'],
  'choice__border-color--disabled--inverse': color['granite-300'],
  'choice__border-radius': radius.default,
  'choice__border-width': '2px',
  'choice__color--unchecked': themeColors.white,
  'choice__color--disabled': themeColors.muted,
  choice__size: spacer[3],
  'choice__size--small': '20px',
  'choice__size-radio': spacer[2],
  'choice__size-radio--small': '12px',
  // dialog
  'dialog__background-color': themeColors.white,
  dialog__padding: spacer[4],
  'dialog-overlay__background-color': themeColors['background-dialog-mask'],
  // filter chip
  'filter-chip__border-radius': radius.pill,
  'filter-chip__background-color': themeColors['primary-alt-lightest'],
  'filter-chip__border-color': themeColors['primary'],
  'filter-chip__color': themeColors.base,
  'filter-chip__background-color--active': themeColors['primary'],
  'filter-chip__border-color--active': themeColors['primary'],
  'filter-chip__color--active': themeColors.white,
  'filter-chip-icon__color': themeColors.base,
  'filter-chip-icon__color-active': themeColors.white,
};

const shadow = {
  'box-card': '0 2px 3px 0 rgba(50, 50, 50, 0.23)',
};

const DefaultTheme = to<ThemeTokens>()({
  color: themeColors,
  components,
  description,
  font,
  shadow,
});

export default DefaultTheme;
