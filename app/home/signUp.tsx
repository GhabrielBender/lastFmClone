import { SafeAreaView } from "react-native";
import { Box, Button, Input, Text } from "native-base";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box alignItems="center" justifyContent="center" h="100%" w="100%">
        <Box alignItems="center" justifyContent="space-around" h="40%" w="70%">
          <Text>Cadastro de cliente</Text>

          <Input placeholder="DIgite o CPF/CNPJ" w="100%" />

          <Button
            onPress={() => {
              router.push("/registrationRoute/taxData");
            }}
          >
            Verificar
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
