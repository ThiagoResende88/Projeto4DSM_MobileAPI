import React, { Component } from "react";
import { Container, Form, Input, SubmitButton } from "../styles";
import Icon from "@expo/vector-icons/MaterialIcons";

export default class Main extends Component {
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
