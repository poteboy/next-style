import React, { FC } from "react";
import { StyleProps } from "@src/styles";
import { View } from "@src/components";

export const VStack: FC<StyleProps> = ({ children, ...props }) => {
  return (
    <View display="flex" flexDirection="column" {...props}>
      {children}
    </View>
  );
};
