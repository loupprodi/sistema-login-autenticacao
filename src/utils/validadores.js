const validarEmail = (email) => {
  return email?.toString().includes("@") && email?.toString().includes(".");
};

const validarSenha = (password) => {
  return password?.toString().length > 6;
};

export { validarEmail, validarSenha };
