import { Routering } from "./routes";
import UserServices from "../services/UserService";

const userService = new UserServices();

export const ProtectedRoutes = ({ children }) => {
  const usuarioAutenticado = userService.usuarioAutenticado();
  return usuarioAutenticado ? children : <Routering />;
};
