import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return(
        <View>
            <TextInput
            style={styles.}
            />
            <TextInput/>
        </View>
    )
    
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center'
  }

})