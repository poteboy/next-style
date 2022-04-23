import React, { FC } from "react";
import { StyleProps } from "@src/styles";
import { View } from "@src/ui-core";

export const HStack: FC<StyleProps> = ({ children, ...props }) => {
  return (
    <View display="flex" flexDirection="row" {...props}>
      {children}
    </View>
  );
};
