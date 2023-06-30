import React from "react";
import { Stack, Tabs } from "expo-router";
import { NativeBaseProvider, Box } from "native-base";

export default () => {
  return (
    <NativeBaseProvider>
      <Stack></Stack>
    </NativeBaseProvider>
  );
};
