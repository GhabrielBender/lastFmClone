import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="signUp"
        options={{
          tabBarIcon: () => (
            <FontAwesome name="sign-in" size={24} color="black" />
          ),
          tabBarLabel: "Cadastro",
          headerTitle: "Cadastro",
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications-sharp" size={24} color="black" />
          ),
          tabBarLabel: "Notificações",
          headerTitle: "Notificações",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
          tabBarLabel: "Usuário",
          headerTitle: "Usuário",
        }}
      />
    </Tabs>
  );
};
