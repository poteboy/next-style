import React, { FC, memo } from "react";
import {
  background,
  BackgroundColorProps,
  textStyle,
  TextStyleProps,
  boxShadow,
  BoxShadowProps,
  buttonStyle,
  ButtonStyleProps,
  variant,
} from "styled-system";
import styled from "styled-components";
import { Button as _Button } from "@material-ui/core";

type ButtonSystem = ButtonStyleProps &
  BackgroundColorProps &
  TextStyleProps &
  BoxShadowProps;

const buttonSystem = [buttonStyle, background, textStyle, boxShadow];
const ButtonRoot = styled(_Button)<ButtonSystem>({}, buttonSystem);

type ButtonProps = {
  title: string;
} & ButtonSystem;

export const Button: FC<ButtonProps> = memo(({ title, ...system }) => {
  return <ButtonRoot {...(system as any)}>{title}</ButtonRoot>;
});
