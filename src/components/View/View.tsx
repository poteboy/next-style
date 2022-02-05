import React, { FC } from "react";
import styled from "styled-components";
import { StyledSystemProps, styledSystemProps, StyleProps } from "@src/styles";

export const View: FC<StyleProps> = (props) => {
  return <ViewRoot {...props}>{props.children}</ViewRoot>;
};

const ViewRoot = styled("div")<StyledSystemProps>({}, styledSystemProps);
