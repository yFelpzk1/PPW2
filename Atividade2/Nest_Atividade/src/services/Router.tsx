
import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";

import CriarDisciplina from "../views/disciplinas/CriarDisciplina";
import ListarDisciplinas from "../views/disciplinas/ListarDisciplinas";

import CriarModulo from "../views/modulos/CriarModulo";
import ListarModulos from "../views/modulos/ListarModulos";

export const routes: RouteObject[] = [
  {
    path: "/sistema",
    element: <Layout />,
    children: [
      // Rotas de Disciplinas 
      {
        path: "/sistema/disciplinas/listar",
        element: <ListarDisciplinas />,
      },
      {
        path: "/sistema/disciplinas/criar",
        element: <CriarDisciplina />,
      },

      // Rotas de Módulos 
      {
        path: "/sistema/modulos/listar",
        element: <ListarModulos />,
      },
      {
        path: "/sistema/modulos/criar",
        element: <CriarModulo />,
      },
    ],
  },
];