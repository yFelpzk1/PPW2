
import type { RouteObject } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import CriarDisciplina from "../../views/disciplinas/CriarDisciplina";
import ListarDisciplinas from "../../views/disciplinas/ListarDisciplinas";
import CriarModulo from "../../views/modulos/CriarModulo";
import ListarModulos from "../../views/modulos/ListarModulos";

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
    ],
  },
];