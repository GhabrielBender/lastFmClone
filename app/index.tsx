import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Box, Button, Input, Text } from "native-base";
import { useRouter, Link, Redirect } from "expo-router";

import useStore from "../store";

export default function LogIn() {
  const router = useRouter();
  const addPerson = useStore((state) => state.setUser);
  const [userData, setUserData] = useState({ name: "", password: "" });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box alignItems="center" justifyContent="center" h="100%" w="100%">
        <Box justifyContent="space-between" w="80%" h="40%">
          <Text>Fruki Demo</Text>

          <Box justifyContent="space-between" w="100%" h="35%">
            <Input
              placeholder="Usuário"
              w="100%"
              value={userData.name}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
            />
            <Input
              placeholder="Senha"
              w="100%"
              value={userData.password}
              onChangeText={(text) =>
                setUserData({ ...userData, password: text })
              }
            />
          </Box>
          <Button
            onPress={() => {
              addPerson(userData);
              router.replace("/home/profile");
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
