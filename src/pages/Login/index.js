import React from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";

export const Login = () => {
  return (
    <Container>
      <Form>
        <Input />
        <Input />
        <h1>Faça o seu Login 👋🏻 </h1>
        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};
