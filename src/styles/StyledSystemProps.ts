import { HTMLAttributes } from "react";
import {
  background,
  BackgroundProps,
  borders,
  BordersProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  boxShadow,
  BoxShadowProps,
} from "styled-system";

export type StyledSystemProps = TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BordersProps &
  BoxShadowProps;

export const styledSystemProps = [
  typography,
  space,
  layout,
  color,
  position,
  flexbox,
  grid,
  background,
  borders,
  boxShadow,
];

export type StyleProps = StyledSystemProps & HTMLAttributes<HTMLElement>;
