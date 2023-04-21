import React, { useState } from "react";
import { Container, Form, SubContainerSing } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  validarEmail,
  validarSenha,
  validarNome,
  validarConfirmaSenha,
  validarTelefone,
} from "../../utils/validadores";
import UserService from "../../services/UserService";
import { Link, useNavigate } from "react-router-dom";

const userService = new UserService();

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await userService.cadastrar({
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        password: form.password,
      });
      if (data) {
        const responseLogin = await userService.login({
          nome: form.email,
          password: form.password,
        });
        if (responseLogin === true) {
          alert("usuario Cadastrado com sucesso");
          navigate("/home");
        }
      }
      setLoading(false);
    } catch (error) {
      alert("Algo deu errado com o Cadastro" + error);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => {
    return (
      validarEmail(form.email) &&
      validarSenha(form.password) &&
      validarNome(form.nome) &&
      validarTelefone(form.telefone) &&
      validarConfirmaSenha(form.password, form.confirmPassword)
    );
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro 👋🏻 </h1>
        <Input
          name="nome"
          placeholder="Digite o seu nome"
          onChange={handleChange}
          type="text"
        />
        <Input
          name="telefone"
          placeholder="Digite o seu telefone"
          onChange={handleChange}
          type="number"
        />
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
        <Input
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button
          type="submit"
          text="Cadastrar!"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSing>
          <p>Já possui conta?</p>
          <Link to="login">Login</Link>
        </SubContainerSing>
      </Form>
    </Container>
  );
};
