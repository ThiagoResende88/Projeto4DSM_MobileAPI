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

  async componentDidMount() {
    const users = await AsyncStorage.getItem("users");
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.setState;
    if (prevState.users !== users) {
      AsyncStorage.setItem("users", JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    try {
      const { users, newUser } = this.state;
      this.setState({ loading: true });

      const response = await api.get(`/users/${newUser}`);
      if (users.find((user) => user.login === response.data.login)) {
        alert("Usuário já adicionado!");
        this.setState({ loading: false });
        return;
      }
      console.log(response)
      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      console.log(data);
      
      this.setState({
        users: [...users, data],
        newUser: "",
        loading: false,
      });
      Keyboard.dismiss();
    } catch (error) {
      alert("Usuário não encontrado");
      this.setState({ loading: false });
    }
  };

  render() {
    const { users, newUser, loading } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false} //  Não corrige o texto
            autoCapitalize="none" // Não deixa a primeira letra maiúscula
            placeholder="Adicionar usuário" // Texto que aparece no input
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={22} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
