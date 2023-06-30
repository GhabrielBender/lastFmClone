import { View, ScrollView, SafeAreaView } from "react-native";
import {
  Box,
  Image,
  AspectRatio,
  Center,
  Text,
  VStack,
  Flex,
  HStack,
  Button,
} from "native-base";
import { useRouter } from "expo-router";

export default function TaxData() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box>chegou</Box>
      <Button
        onPress={() => {
          router.push("/registrationRoute/address");
        }}
      >
        Entrar
      </Button>
    </SafeAreaView>
  );
}
