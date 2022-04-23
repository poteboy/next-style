import React, { FC, memo } from 'react';
import { StyleProps, ResponsiveProps } from '@src/styles';
import { View } from '@src/ui-core';

export const HStack: FC<StyleProps & ResponsiveProps> = memo(
  ({ children, ...props }) => {
    return (
      <View display="flex" flexDirection="row" {...props}>
        {children}
      </View>
    );
  },
);
