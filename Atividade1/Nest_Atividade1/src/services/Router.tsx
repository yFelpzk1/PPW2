
import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";


import CriarUsuario from "../views/usuarios/CriarUsuario";
import ListarUsuarios from "../views/usuarios/ListarUsuarios";

export const routes: RouteObject[] = [
  {
    path: "/sistema",
    element: <Layout />,
    children: [
      // --- Rotas de Usuários ---
      {
        path: "/sistema/usuarios/listar",
        element: <ListarUsuarios />,
      },
      // 2. ADICIONE esta rota
      {
        path: "/sistema/usuarios/criar",
        element: <CriarUsuario />,
      },
    ],
  },
];