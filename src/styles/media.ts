import styled, {
  css,
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';

export const MAX_MOBILE_WIDTH = 560;
export const MIN_TABLET_WIDTH = 561;
export const MIN_DESKTOP_WIDTH = 834;

export const _sp = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    ${css(first, ...interpolations)}
  }
`;

export const _tab = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MIN_DESKTOP_WIDTH}px) {
    ${css(first, ...interpolations)}
  }
`;
export const _pc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    ${css(first, ...interpolations)}
  }
`;

export type ResponsiveProps = {
  sp?: CSSObject,
  tab?: CSSObject,
  pc?: CSSObject,
}