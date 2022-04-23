import React, { FC } from 'react';
import { StyleProps, ResponsiveProps } from '@src/styles';
import { View } from '@src/ui-core';

export const VStack: FC<StyleProps & ResponsiveProps> = ({
  children,
  ...props
}) => {
  return (
    <View display="flex" flexDirection="column" {...props}>
      {children}
    </View>
  );
};
