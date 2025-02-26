import React, { Component } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from "../styles";

export default class Main extends Component {
  state = {
    newUser: "",
    user: [],
    loading: false,
  };

  async componentDidMount(){
    const users = await AsyncStorage.getItem('users')
    if(users) {
      this.setState({ users: JSON.parse(users)})
    }
  }

  // componentDidUpdate(_, prevState){
  //   const { users } = this.setState
  //   if(prevState.users !== users)
  // }


  render() {
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false} //  Não corrige o texto
            autoCapitalize="none" // Não deixa a primeira letra maiúscula
            placeholder="Adicionar usuário" // Texto que aparece no input
          />
          <SubmitButton>
            <Icon name="add" size={22} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
