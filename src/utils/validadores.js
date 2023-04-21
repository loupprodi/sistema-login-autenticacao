const validarEmail = (email) => {
  return email?.toString().includes("@") && email?.toString().includes(".");
};

const validarSenha = (senha) => {
  return senha?.toString().length > 6;
};

const validarNome = (nome) => {
  return nome?.toString().length > 2;
};

const validarTelefone = (telefone) => {
  return telefone?.toString().length >= 8;
};

const validarConfirmaSenha = (senha, ConfirmaSenha) => {
  return validarSenha(senha) && senha === ConfirmaSenha;
};

export {
  validarEmail,
  validarSenha,
  validarNome,
  validarTelefone,
  validarConfirmaSenha,
};
