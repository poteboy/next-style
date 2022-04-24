import React from 'react';
import type { NextPage } from 'next';
import { View, Button, Text, VStack } from '@src/ui-core';

const Home = () => {
  return (
    <>
      <View ml={4} sp={{ background: 'black' }}>
        <Button variant="secondary">
          <Text color="white">hello</Text>
        </Button>
        <Text variant="heading">hello</Text>
        <Text tag="p">hello</Text>
        <Text tag="span">hello</Text>
      </View>
      <VStack tab={{ background: 'tomato' }}>
        <Text variant="heading">hello</Text>
        <Text tag="p">hello</Text>
        <Text tag="span">hello</Text>
      </VStack>
    </>
  );
};

export default Home;
