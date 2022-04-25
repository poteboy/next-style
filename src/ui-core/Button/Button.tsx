import React, { FC, memo } from 'react';
import styled, {
  css,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
  CSSObject,
} from 'styled-components';
import { Button as _Button, ButtonProps } from '@material-ui/core';
import { StyleProps, styledSystemProps, StyledSystemProps } from '@src/styles';
import { variant, ButtonStyleProps } from 'styled-system';

type Variant = 'primary' | 'secondary';

type B = Exclude<ButtonStyleProps, 'variant'> & {
  variant: Variant;
};

const ButtonRoot = styled(_Button)<StyledSystemProps>({}, styledSystemProps);

export const Root = styled(ButtonRoot)<{
  variantStyle: CSSObject;
}>`
  ${props => props.variantStyle}
`;

export const Button: FC<B> = memo(({ children, variant, ...style }) => {
  const variantStyle: CSSObject = createStyleFromVariant(variant);

  return (
    <Root variantStyle={variantStyle} {...style}>
      {children}
    </Root>
  );
});

const createStyleFromVariant = (variant: Variant): CSSObject => {
  const defaultStyle: CSSObject = {
    background: 'tomato',
    borderRadius: 15,
    '&:hover': {
      background: 'tomato',
    },
  };
  switch (variant) {
    case 'primary':
      return defaultStyle;
    default:
      return defaultStyle;
  }
};
