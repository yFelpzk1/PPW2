
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Module } from "../../models/Module";

const buscarTodosModulos = async (): Promise<Module[] | null> => {
  try {
    const response = await axios.get(
      "http://localhost:8000/rest/sistema/modulos/listar",
    );
    return response.data.dados;
  } catch (error: any) {
    console.log(error);
  }
  return null;
};

export default function ListarModulos() {
  const [models, setModels] = useState<Module[] | null>(null);

  useEffect(() => {
    async function getModulos() {
      const modulos = await buscarTodosModulos();
      if (modulos) {
        setModels(modulos);
      }
    }
    getModulos();
  }, []);

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {}
          <h2>Lista de Módulos</h2>
          {}
          <Link to="/sistema/modulos/criar" className="btn btn-add">
            <span className="btn-icon">
              <i>
                <FaPlus />
              </i>
            </span>
            Novo
          </Link>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              {}
              <th>ID Módulo</th>
              <th>ID Disciplina</th>
              <th>Título</th>
              <th>Descrição</th>
              <th className="center actions" colSpan={3}>
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {models?.map((model) => (
              <tr key={model.MODULE_ID}>
                <td>{model.MODULE_ID}</td>
                <td>{model.DISCIPLINE_ID}</td>
                <td>{model.TITLE}</td>
                <td>{model.DESCRIPTION}</td>
                <td className="center actions">
                  {}
                  <Link to="/sistema/modulos/alterar" className="btn btn-edit">
                    <span className="btn-icon">
                      <i>
                        <BsPencilSquare />
                      </i>
                    </span>
                    Atualizar
                  </Link>
                  <Link to="/sistema/modulos/excluir" className="btn btn-delete">
                    <span className="btn-icon">
                      <i>
                        <FaRegTrashAlt />
                      </i>
                    </span>
                    Excluir
                  </Link>
                  <Link
                    to="/sistema/modulos/consultar"
                    className="btn btn-info"
                  >
                    <span className="btn-icon">
                      <i>
                        <FaMagnifyingGlass />
                      </i>
                    </span>
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