import React, { FC, memo } from "react";
import styled, { css } from "styled-components";
import { Button as _Button, ButtonProps } from "@material-ui/core";
import { StyleProps, styledSystemProps, StyledSystemProps } from "@src/styles";
import { variant, ButtonStyleProps } from "styled-system";

type VariantProps = {
  variant?: "primary";
};

type B = Exclude<ButtonStyleProps, "variant"> & VariantProps;

const ButtonRoot = styled(_Button)<StyledSystemProps>(
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "black",
        borderRadius: 20,
        ":hover": {
          bg: "black",
        },
      },
      secondary: {
        color: "white",
        bg: "secondary",
        ":hover": {
          bg: "black",
        },
      },
    },
  }),
  styledSystemProps
);

export const Button: FC<B> = memo(({ children, variant, ...style }) => {
  return (
    <ButtonRoot variant={variant ?? ("primary" as any)} {...style}>
      {children}
    </ButtonRoot>
  );
});
