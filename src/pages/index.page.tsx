import React from "react";
import type { NextPage } from "next";
import { View, Button } from "@src/components";
import { Button as ButtonB } from "@material-ui/core";

const Home = () => {
  return (
    <View>
      <Button title="hello" backgroundColor="tomato" />
      <ButtonB style={{ background: "tomato" }}>hello</ButtonB>
    </View>
  );
};

export default Home;
