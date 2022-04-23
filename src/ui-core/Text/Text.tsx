import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { StyledSystemProps, styledSystemProps, StyleProps } from '@src/styles';
import { fontWeight, variant as _variant } from 'styled-system';

type Variant = 'body' | 'heading';

type TextProps = StyleProps & {
  tag?: 'div' | 'a' | 'p' | 'span';
} & {
  variant?: Variant;
};

export const Text: FC<TextProps> = memo(props => {
  const { tag, children, variant, ...style } = props;

  const variantStyle = createStyleFromVariant(variant);

  switch (tag) {
    case 'div':
      return (
        <DivRoot {...style} style={variantStyle}>
          {children}
        </DivRoot>
      );
    case 'p':
      return (
        <PRoot {...style} style={variantStyle}>
          {children}
        </PRoot>
      );
    case 'a':
      return (
        <ARoot {...style} style={variantStyle}>
          {children}
        </ARoot>
      );
    case 'span':
      return (
        <SpanRoot {...style} style={variantStyle}>
          {children}
        </SpanRoot>
      );
    default:
      return (
        <DivRoot {...style} style={variantStyle}>
          {children}
        </DivRoot>
      );
  }
});

const variant = _variant({
  variants: {
    body: {
      fontWeight: 600,
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'medium',
      lineHeight: 'copy',
      fontSize: 2,
    },
    label: {
      fontFamily: 'heading',
      fontWeight: 'regular',
      lineHeight: 'solid',
      fontSize: 1,
    },
  },
});

const DivRoot = styled('div')<StyledSystemProps>(variant, styledSystemProps);
const PRoot = styled('p')<StyledSystemProps>(variant, styledSystemProps);
const SpanRoot = styled('span')<StyledSystemProps>(variant, styledSystemProps);
const ARoot = styled('a')<StyledSystemProps>(variant, styledSystemProps);

const createStyleFromVariant = (variant?: Variant): React.CSSProperties => {
  if (!variant) return {};

  const defaultTheme = {
    fontWeight: 400,
    fontSize: '16px',
  };

  switch (variant) {
    case 'body':
      return defaultTheme;
    case 'heading':
      return {
        fontWeight: 600,
        fontSize: '22px',
      };
    default:
      return defaultTheme;
  }
};
