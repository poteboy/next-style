

### これは何


スタイリングを全てprops経由で行いたい。
レスポンシブの時も含めて。

通常のスタイリングは`utility props`経由で行い、レスポンシブ時は`tab`,`sp`propsとして渡す。


```tsx
import { View, Button, Text, VStack } from '@src/ui-core';

const Home = () => {
  return (
    <>
      <View ml={4} tab={{ background: 'black' }}>
        <Button>
          <Text color="white">hello</Text>
        </Button>
        <Text variant="heading">hello</Text>
        <Text tag="p">hello</Text>
        <Text tag="span">hello</Text>
      </View>
    </>
  );
};
```

