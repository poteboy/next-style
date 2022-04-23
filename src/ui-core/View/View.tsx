import React, { FC, memo } from 'react';
import styled, {
  CSSObject,
  CSSProp,
  SimpleInterpolation,
} from 'styled-components';
import {
  StyledSystemProps,
  styledSystemProps,
  StyleProps,
  _sp,
  _tab,
  _pc,
  ResponsiveProps,
} from '@src/styles';

export const View: FC<StyleProps & ResponsiveProps> = memo(props => {
  const { sp, tab, pc, ...style } = props;

  const responsive = [..._sp(sp ?? {}), _tab(tab ?? {}), _pc(pc ?? {})];

  return (
    <Root responsive={responsive} {...(style as any)}>
      {props.children}
    </Root>
  );
});

const ViewRoot = styled('div')<StyledSystemProps & SimpleInterpolation[]>(
  {},
  styledSystemProps,
);

const Root = styled(ViewRoot)<{ responsive: SimpleInterpolation[] }>`
  ${props => props.responsive}
`;
