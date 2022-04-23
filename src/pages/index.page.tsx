import React from "react";
import type { NextPage } from "next";
import { View, Button, Text } from "@src/ui-core";

const Home = () => {
  return (
    <View ml={4}>
      <Button  ><Text color='white'>hello</Text></Button>
      <Text variant="heading">hello</Text>
      <Text tag="p">hello</Text>
      <Text tag="span">hello</Text>
    </View>
  );
};

export default Home;
