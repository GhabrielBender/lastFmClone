import React from "react";
import { Stack, Tabs } from "expo-router";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </NativeBaseProvider>
  );
}
