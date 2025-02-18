import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Login from "./pages/login";
// import User from "./pages/user";

const Stack = createStackNavigator();

export default function Routes() {
    return(
       <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Main" component={Main} />
              {/* <Stack.Screen name="User" component={User} />   */}
       </Stack.Navigator> 
    )
}