
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Submodule } from "../../models/Submodule"; 

const buscarTodos = async (): Promise<Submodule[] | null> => {
  try {
    const response = await axios.get("http://localhost:8000/rest/sistema/submodulos/listar");
    return response.data.dados;
  } catch (error) { console.log(error); return null; }
};

export default function ListarSubmodulos() {
  const [models, setModels] = useState<Submodule[] | null>(null);

  useEffect(() => {
    async function getData() {
      const data = await buscarTodos();
      if (data) setModels(data);
    }
    getData();
  }, []);

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Lista de Submódulos</h2>
          <Link to="/sistema/submodulos/criar" className="btn btn-add">
            <span className="btn-icon"><i><FaPlus /></i></span> Novo
          </Link>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Módulo ID</th>
              <th>Título</th>
              <th className="center actions">Ação</th>
            </tr>
          </thead>
          <tbody>
            {models?.map((model) => (
              <tr key={model.SUBMODULE_ID}>
                <td>{model.SUBMODULE_ID}</td>
                <td>{model.MODULE_ID}</td>
                <td>{model.TITLE}</td>
                <td className="center actions">
                  <Link to="#" className="btn btn-edit"><i><BsPencilSquare /></i></Link>
                  <Link to="#" className="btn btn-delete"><i><FaRegTrashAlt /></i></Link>
                  <Link to="#" className="btn btn-info"><i><FaMagnifyingGlass /></i></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}