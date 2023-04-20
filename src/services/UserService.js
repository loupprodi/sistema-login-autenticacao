import axios from "axios";

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN + "/api",
    });
  }
  login = async (dados) => {
    const { data } = await this.axios.post("/login", dados);
    if (data) {
      localStorage.setItem("nome", data.user.nome);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("token", data.user.token);

      return true;
    }
    return;
  };
  usuarioAutenticado = () => {
    return localStorage.getItem("token") !== undefined ? true : false;
  };
}
