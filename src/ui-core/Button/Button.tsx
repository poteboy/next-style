import React, { FC, memo } from 'react';
import styled, {
  css,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
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
  variantStyle: SimpleInterpolation[];
}>`
  ${props => props.variantStyle}
`;

export const Button: FC<B> = memo(({ children, variant, ...style }) => {
  const variantStyle: SimpleInterpolation[] = [
    ...createStyleFromVariant(variant),
  ];

  return (
    <Root variantStyle={variantStyle} {...style}>
      {children}
    </Root>
  );
});

const createStyleFromVariant = (
  variant: Variant,
): FlattenSimpleInterpolation => {
  switch (variant) {
    case 'primary':
      return css`
        background: 'tomato'
        color: 'white',
        border-radius: 20,
        '&:hover': {
          'background': 'tomato'
        }
      `;
    default:
      return css`
      background: 'tomato'
      color: 'white',
      border-radius: 20,
      '&:hover': {
        'background': 'tomato'
      }
    `;
  }
};

// import React, { FC, memo } from 'react';
// import styled, { css } from 'styled-components';
// import { Button as _Button, ButtonProps } from '@material-ui/core';
// import { StyleProps, styledSystemProps, StyledSystemProps } from '@src/styles';
// import { variant, ButtonStyleProps } from 'styled-system';

// type VariantProps = {
//   variant?: 'primary' | 'secondary';
// };

// type B = Exclude<ButtonStyleProps, 'variant'> & VariantProps;

// const ButtonRoot = styled(_Button)<StyledSystemProps>(
//   variant({
//     variants: {
//       primary: {
//         color: 'white',
//         bg: 'black',
//         borderRadius: 20,
//         ':hover': {
//           bg: 'black',
//         },
//       },
//       secondary: {
//         color: 'white',
//         bg: 'tomato',
//         ':hover': {
//           bg: 'tomato',
//         },
//       },
//     },
//   }),
//   styledSystemProps,
// );

// export const Button: FC<B> = memo(({ children, variant, ...style }) => {
//   return (
//     <ButtonRoot variant={variant ?? ('primary' as any)} {...style}>
//       {children}
//     </ButtonRoot>
//   );
// });
