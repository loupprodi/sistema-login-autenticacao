import React, { useState } from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { validarEmail, validarSenha } from "../../utils/validadores";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      alert("Login");
      setLoading(false);
    } catch (error) {
      alert("Algo deu errado com o login" + error);
    }
  };

  const handleChange = (event) => {
    console.log("Digitando...", event.target.name, event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("Form", form);
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  };

  console.log("Form esta valido", validadorInput());

  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋🏻 </h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button
          type="submit"
          text="Entrar!"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};
