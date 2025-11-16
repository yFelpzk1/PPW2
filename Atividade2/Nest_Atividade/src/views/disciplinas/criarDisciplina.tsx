
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function CriarDisciplina() {
  const getInputClass = () => {
    return "form-control app-label mt-2";
  };

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <h2>Nova Disciplina</h2>
        <form>
          {/* Campo NAME (do diagrama) */}
          <div className="mb-2 mt-4">
            <label htmlFor="name" className="app-label">
              Nome da Disciplina:
            </label>
            <input
              id="name"
              name="name"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {/* Campo DESCRIPTION (do diagrama) */}
          <div className="mb-2 mt-4">
            <label htmlFor="description" className="app-label">
              Descrição:
            </label>
            {/* Usamos <textarea> aqui porque o tipo no banco é 'text' */}
            <textarea
              id="description"
              name="description"
              className={getInputClass()}
              rows={4}
            />
          </div>

          <div className="btn-content mt-4">
            <button
              id="submit"
              type="submit"
              className="btn btn-success"
              title="Cadastrar uma nova disciplina"
            >
              <span className="btn-icon">
                <i>
                  <FaSave />
                </i>
              </span>
              Salvar
            </button>
            <button
              id="cancel"
              type="button"
              className="btn btn-cancel"
              title="Cancelar o cadastro"
            >
              <span className="btn-icon">
                <i>
                  <MdCancel />
                </i>
              </span>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}