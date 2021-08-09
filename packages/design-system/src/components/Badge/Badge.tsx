import React from 'react';
import classNames from 'classnames';

export type BadgeSize = 'big';
export type BadgeVariation = 'info' | 'success' | 'warn' | 'alert';

export interface BadgeProps {
  /**
   * Additional classes to be added to the root badge element.
   * Useful for adding utility classes.
   */
  className?: string;
  /**
   * Label text or HTML.
   */
  children: string | React.ReactNode;
  /**
   * Sets the font size of the Badge. Only supports 'big'
   */
  size?: BadgeSize;
  /**
   * A string corresponding to the badge-component variation classes
   */
  variation?: BadgeVariation;
}

export const Badge: React.FC<React.ComponentPropsWithRef<'span'> & BadgeProps> = (
  props: BadgeProps
) => {
  const { className = '', children, size, variation, ...others } = props;
  const sizeClasses = { big: 'ds-u-font-size--base' };

  const variationClass = variation && `ds-c-badge--${variation}`;
  const classes = classNames('ds-c-badge', variationClass, sizeClasses[size], className);

  return (
    <span className={classes} {...others}>
      {children}
    </span>
  );
};

export default Badge;
