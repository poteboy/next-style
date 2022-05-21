import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { StyledSystemProps, styledSystemProps, StyleProps } from '@src/styles';
import { fontWeight, variant as _variant } from 'styled-system';

type Variant = 'body' | 'heading';
type TextTag = 'div' | 'a' | 'p' | 'span';

type TextProps = StyleProps & {
  tag?: TextTag;
} & {
  variant?: Variant;
};

export const Text: FC<TextProps> = memo(props => {
  const { tag, children, variant, ...style } = props;

  const variantStyle = createStyleFromVariant(variant);

  switch (tag) {
    case 'div':
      return (
        <DivRoot style={variantStyle} {...style}>
          {children}
        </DivRoot>
      );
    case 'p':
      return (
        <PRoot style={variantStyle} {...style}>
          {children}
        </PRoot>
      );
    case 'a':
      return (
        <ARoot style={variantStyle} {...style}>
          {children}
        </ARoot>
      );
    case 'span':
      return (
        <SpanRoot style={variantStyle} {...style}>
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

const DivRoot = styled('div')<StyledSystemProps>({}, styledSystemProps);
const PRoot = styled('p')<StyledSystemProps>({}, styledSystemProps);
const SpanRoot = styled('span')<StyledSystemProps>({}, styledSystemProps);
const ARoot = styled('a')<StyledSystemProps>({}, styledSystemProps);

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
