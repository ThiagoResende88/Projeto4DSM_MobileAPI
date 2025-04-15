import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Main from "./pages/main";
import Login from "./pages/login";
import CadastrarUsuario from "./pages/cadastro";
import CardDetail from "./pages/CardDetail"; 

const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#0d0f45", // Azul marinho do Yu-Gi-Oh!
    elevation: 0, // Remove sombra no Android
    shadowOpacity: 0, // Remove sombra no iOS
    height: 100, // Altura customizada
  },
  headerTitleStyle: {
    fontFamily: "YuGiOh", // Use a fonte customizada
    fontSize: 24,
    color: "#FFD700", // Dourado
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 1.5,
  },
  headerTintColor: "#FFD700", // Cor dos botões (voltar)
};

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "YU-GI-OH CARDS",
          headerLeft: () => null,
        }}
      />
      
      <Stack.Screen
        name="CadastrarUsuario"
        component={CadastrarUsuario}
        options={{
          title: "CADASTRO",
        }}
      />
      
      <Stack.Screen
        name="Main"
        component={Main}
        options={({ navigation }) => ({
          title: "MINHAS CARTAS",
          headerLeft: () => null,
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={async () => {
                try {
                  navigation.replace("Login");
                } catch (error) {
                  console.error("Logout error:", error);
                }
              }}
            />
          ),
        })}
      />
      
      <Stack.Screen
        name="CardDetail"
        component={CardDetail}
        options={{
          title: "DETALHES DA CARTA",
        }}
      />
    </Stack.Navigator>
  );
}
