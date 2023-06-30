import { SafeAreaView } from "react-native";
import { Box, Text, Button } from "native-base";
import useStore from "../../store";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const user = useStore((state) => state.user);
  const removeUser = useStore((state) => state.removeUser);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box alignItems="center" justifyContent="center" h="100%" w="100%">
        <Box h="30%" justifyContent="space-between">
          <Text>Seja bem-indo {user.name}</Text>
          <Text>Sua senha é {user.password}</Text>
          <Text>Não sei porque ela está exposta aqui</Text>
          <Button
            onPress={() => {
              removeUser();
              router.replace("/");
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
