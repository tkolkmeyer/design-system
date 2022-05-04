import Button from './Button';
import React from 'react';
import { UtagContainer } from '../analytics';
import { setButtonSendsAnalytics } from '../flags';
import { fireEvent, render, screen } from '@testing-library/react';

function mockWarn(testFunction: () => void) {
  const original = console.warn;
  const mock = jest.fn();
  console.warn = mock;
  testFunction();
  console.warn = original;
  return mock;
}

const Link = (props: any) => {
  return (
    <a {...props} href="#">
      {props.children}
    </a>
  );
};

const defaultProps = {
  children: 'Foo',
};

function renderButton(props = {}) {
  return render(<Button {...defaultProps} {...props} />);
}

describe('Button', () => {
  it('renders as button', () => {
    renderButton();
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('renders as submit button', () => {
    renderButton({ type: 'submit' });
    expect(screen.getByRole('button').getAttribute('type')).toEqual('submit');
  });

  it('renders disabled button', () => {
    renderButton({ disabled: true });
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('renders as an anchor with custom prop', () => {
    renderButton({
      href: '/example',
      target: '_blank',
      type: 'submit',
    });
    expect(screen.getByRole('link')).toMatchSnapshot();
  });

  it('renders as a custom Link component', () => {
    mockWarn(() => {
      renderButton({
        component: Link,
        type: 'submit',
        to: 'anywhere',
      });
      expect(screen.getByRole('link')).toMatchSnapshot();
    });
  });

  it('renders disabled link correctly', () => {
    renderButton({
      href: 'javascript:void(0)',
      disabled: true,
      children: 'Link button',
    });
    expect(screen.getByRole('link')).toMatchSnapshot();
  });

  it('applies additional classes', () => {
    renderButton({ className: 'foobar' });
    const button = screen.getByRole('button');
    expect(button.classList.contains('foobar')).toBe(true);
    expect(button.classList.contains('ds-c-button')).toBe(true);
  });

  it('applies variation classes', () => {
    renderButton({ variation: 'primary' });
    const button = screen.getByRole('button');
    expect(button.classList.contains('ds-c-button')).toBe(true);
    expect(button.classList.contains('ds-c-button--primary')).toBe(true);
  });

  it('applies size classes', () => {
    renderButton({ size: 'small' });
    const button = screen.getByRole('button');
    expect(button.classList.contains('ds-c-button')).toBe(true);
    expect(button.classList.contains('ds-c-button--small')).toBe(true);
  });

  it('applies disabled, inverse, and variation classes together', () => {
    renderButton({
      href: '#',
      disabled: true,
      inversed: true,
      variation: 'transparent',
    });
    const link = screen.getByRole('link');
    expect(link.classList.contains('ds-c-button--transparent')).toBe(true);
    expect(link.classList.contains('ds-c-button--inverse')).toBe(true);
    expect(link.classList.contains('ds-c-button--disabled')).toBe(true);
    expect(link.classList.contains('ds-c-button')).toBe(true);
  });

  it('prints deprecation warning for "component" prop', () => {
    const mock = mockWarn(() => {
      renderButton({
        component: Link,
        type: 'submit',
        to: 'anywhere',
      });
    });
    expect(mock).toHaveBeenCalledWith(
      "[Deprecated]: Please remove the 'component' prop in <Button>. This prop will be removed in a future release."
    );
  });

  describe('Analytics', () => {
    let tealiumMock;

    beforeEach(() => {
      setButtonSendsAnalytics(true);
      tealiumMock = jest.fn();
      (window as any as UtagContainer).utag = {
        link: tealiumMock,
      };
    });

    afterEach(() => {
      setButtonSendsAnalytics(false);
      jest.resetAllMocks();
    });

    it('sends button analytics event', () => {
      renderButton();
      fireEvent.click(screen.getByRole('button'));
      expect(tealiumMock.mock.calls[0]).toMatchSnapshot();
    });

    it('sends link analytics event', () => {
      renderButton({ href: '#/somewhere-over-the-rainbow' });
      fireEvent.click(screen.getByRole('link'));
      expect(tealiumMock.mock.calls[0]).toMatchSnapshot();
    });

    it('disables analytics event tracking', () => {
      renderButton({ analytics: false });
      fireEvent.click(screen.getByRole('button'));
      expect(tealiumMock).not.toBeCalled();
    });

    it('passes along parent heading and type', () => {
      const analyticsParentHeading = 'Hello World';
      const analyticsParentType = 'div';
      renderButton({
        analyticsParentHeading,
        analyticsParentType,
      });
      fireEvent.click(screen.getByRole('button'));
      expect(tealiumMock).toBeCalledWith(
        expect.objectContaining({
          parent_component_heading: analyticsParentHeading,
          parent_component_type: analyticsParentType,
        })
      );
    });
  });
});
