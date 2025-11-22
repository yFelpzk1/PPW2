
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Submodule } from "../../type/Submodule";

const buscarTodosSubmodulos = async (): Promise<Submodule[] | null> => {
  try {
    const response = await axios.get(
      "http://localhost:8000/rest/sistema/submodulos/listar",
    );
    return response.data.dados;
  } catch (error: any) {
    console.log(error);
  }
  return null;
};

export default function ListarSubmodulos() {
  const [models, setModels] = useState<Submodule[] | null>(null);

  useEffect(() => {
    async function getSubmodulos() {
      const submodulos = await buscarTodosSubmodulos();
      if (submodulos) {
        setModels(submodulos);
      }
    }
    getSubmodulos();
  }, []);

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Lista de Submódulos</h2>
          <Link to="/sistema/submodulos/criar" className="btn btn-add">
            <span className="btn-icon"><i><FaPlus /></i></span>
            Novo
          </Link>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Módulo</th>
              <th>Título</th>
              <th className="center actions" colSpan={3}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {models?.map((model) => (
              <tr key={model.SUBMODULE_ID}>
                <td>{model.SUBMODULE_ID}</td>
                <td>{model.MODULE_ID}</td>
                <td>{model.TITLE}</td>
                <td className="center actions">
                  <Link to="/sistema/submodulos/alterar" className="btn btn-edit">
                    <span className="btn-icon"><i><BsPencilSquare /></i></span>
                    Atualizar
                  </Link>
                  <Link to="/sistema/submodulos/excluir" className="btn btn-delete">
                    <span className="btn-icon"><i><FaRegTrashAlt /></i></span>
                    Excluir
                  </Link>
                  <Link to="/sistema/submodulos/consultar" className="btn btn-info">
                    <span className="btn-icon"><i><FaMagnifyingGlass /></i></span>
                    Consulta
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}