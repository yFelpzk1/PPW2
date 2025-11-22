
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

// 1. Importa o novo modelo 'Discipline'
import { Discipline } from "../../models/Discipline";

// 2. Muda a função de busca
const buscarTodasDisciplinas = async (): Promise<Discipline[] | null> => {
  try {
    // 3. Muda a URL da API
    const response = await axios.get(
      "http://localhost:8000/rest/sistema/disciplinas/listar",
    );
    return response.data.dados;
  } catch (error: any) {
    console.log(error);
  }
  return null;
};

export default function ListarDisciplinas() {
  // 4. Muda o tipo do State
  const [models, setModels] = useState<Discipline[] | null>(null);

  useEffect(() => {
    async function getDisciplinas() {
      // 5. Chama a nova função
      const disciplinas = await buscarTodasDisciplinas();
      if (disciplinas) {
        setModels(disciplinas);
      }
    }
    getDisciplinas();
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
          {/* 6. Muda o título */}
          <h2>Lista de Disciplinas</h2>
          {/* 7. Muda o link do botão 'Novo' */}
          <Link to="/sistema/disciplinas/criar" className="btn btn-add">
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
              {/* 8. Muda as colunas da tabela */}
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th className="center actions" colSpan={3}>
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {models?.map((model) => (
              // 9. Muda a 'key' e os dados da tabela
              <tr key={model.DISCIPLINE_ID}>
                <td>{model.DISCIPLINE_ID}</td>
                <td>{model.NAME}</td>
                <td>{model.DESCRIPTION}</td>
                <td className="center actions">
                  {/* 10. Muda as rotas dos botões de ação */}
                  <Link
                    to="/sistema/disciplinas/alterar"
                    className="btn btn-edit"
                  >
                    <span className="btn-icon">
                      <i>
                        <BsPencilSquare />
                      </i>
                    </span>
                    Atualizar
                  </Link>
                  <Link
                    to="/sistema/disciplinas/excluir"
                    className="btn btn-delete"
                  >
                    <span className="btn-icon">
                      <i>
                        <FaRegTrashAlt />
                      </i>
                    </span>
                    Excluir
                  </Link>
                  <Link
                    to="/sistema/disciplinas/consultar"
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