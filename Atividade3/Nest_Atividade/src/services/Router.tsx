import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";

import CriarDisciplina from "../views/disciplinas/CriarDisciplina";
import ListarDisciplinas from "../views/disciplinas/ListarDisciplinas";

import CriarModulo from "../views/modulos/CriarModulo";
import ListarModulos from "../views/modulos/ListarModulos";

// CORREÇÃO AQUI: Mudei de "../../" para "../"
import CriarSubmodulo from "../views/submodulos/CriarSubmodulo";
import ListarSubmodulos from "../views/submodulos/ListarSubmodulos";

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

      // Rotas de SubMódulos
      {
        path: "/sistema/submodulos/listar",
        element: <ListarSubmodulos />,
      },
      {
        path: "/sistema/submodulos/criar",
        element: <CriarSubmodulo />,
      },
    ],
  },
];