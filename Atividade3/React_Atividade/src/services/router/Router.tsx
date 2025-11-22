
import type { RouteObject } from "react-router-dom";
import Layout from "../../components/layout/Layout";

import CriarDisciplina from "../../views/disciplinas/CriarDisciplina";
import ListarDisciplinas from "../../views/disciplinas/ListarDisciplinas";

import CriarModulo from "../../views/modulos/CriarModulo";
import ListarModulos from "../../views/modulos/ListarModulos";

import CriarSubmodulo from "../../views/submodulos/CriarSubmodulo";
import ListarSubmodulos from "../../views/submodulos/ListarSubmodulos";

import CriarQuestao from "../../views/questoes/CriarQuestao";
import ListarQuestoes from "../../views/questoes/ListarQuestoes";

export const routes: RouteObject[] = [
  {
    path: "/sistema",
    element: <Layout />,
    children: [
      {
        path: "disciplinas/listar",
        element: <ListarDisciplinas />,
      },
      {
        path: "disciplinas/criar",
        element: <CriarDisciplina />,
      },

      {
        path: "modulos/listar",
        element: <ListarModulos />,
      },
      {
        path: "modulos/criar",
        element: <CriarModulo />,
      },

      {
        path: "submodulos/listar",
        element: <ListarSubmodulos />,
      },
      {
        path: "submodulos/criar",
        element: <CriarSubmodulo />,
      },

      {
        path: "questoes/listar",
        element: <ListarQuestoes />,
      },
      {
        path: "questoes/criar",
        element: <CriarQuestao />,
      },
    ],
  },
];