import React, { FC } from "react";
import { StyleProps } from "@src/styles";
import { View } from "@src/components";

export const HStack: FC<StyleProps> = ({ children }) => {
  return (
    <View display="flex" flexDirection="row">
      {children}
    </View>
  );
};
