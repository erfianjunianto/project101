import React from "react";
import { Button, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Button>Klik saya</Button>
      <Button size="sm" variant="subtle">
            PRIMARY
      </Button>
      <Button size="sm" variant="subtle" colorScheme="secondary">
        SECONDARY
      </Button>
      <Button size="sm" variant="subtle" isDisabled>
        DISABLED
      </Button>
    </NativeBaseProvider>
  );
}