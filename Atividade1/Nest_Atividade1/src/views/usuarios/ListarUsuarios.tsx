
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";


import { User } from "../../models/User";

// Mudamos a função para buscar usuários
const buscarTodosUsuarios = async (): Promise<User[] | null> => {
  try {

    const response = await axios.get(
      "http://localhost:8000/rest/sistema/usuarios/listar",
    );
    return response.data.dados;
  } catch (error: any) {
    console.log(error);
  }
  return null;
};


export default function ListarUsuarios() {
  // Mudamos o tipo do state para User[]
  const [models, setModels] = useState<User[] | null>(null);

  // Hook para buscar os dados quando o componente carregar
  useEffect(() => {
    async function getUsuarios() {
      // Chama a nova função de busca
      const usuarios = await buscarTodosUsuarios();
      if (usuarios) {
        setModels(usuarios);
      }
    }
    getUsuarios();
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
          {/* Título alterado */}
          <h2>Lista de Usuários</h2>
          {/* Link alterado para a rota de criar usuário */}
          <Link to="/sistema/usuarios/criar" className="btn btn-add">
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
              {/* Colunas alteradas para refletir o modelo User */}
              <th>ID</th>
              <th>Nome de Usuário</th>
              <th>Email</th>
              <th className="center actions" colSpan={3}>
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {/* O .map() agora usa os dados do 'model' User */}
            {models?.map((model) => (
              <tr key={model.USER_ID}>
                {/* Campos alterados para USER_ID, USERNAME, EMAIL */}
                <td>{model.USER_ID}</td>
                <td>{model.USERNAME}</td>
                <td>{model.EMAIL}</td>
                <td className="center actions">
                  {/* Links alterados para as rotas de usuário */}
                  <Link to="/sistema/usuarios/alterar" className="btn btn-edit">
                    <span className="btn-icon">
                      <i>
                        <BsPencilSquare />
                      </i>
                    </span>
                    Atualizar
                  </Link>
                  <Link to="/sistema/usuarios/excluir" className="btn btn-delete">
                    <span className="btn-icon">
                      <i>
                        <FaRegTrashAlt />
                      </i>
                    </span>
                    Excluir
                  </Link>
                  <Link
                    to="/sistema/usuarios/consultar"
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