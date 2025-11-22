
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function CriarModulo() {
  const getInputClass = () => {
    return "form-control app-label mt-2";
  };

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <h2>Novo Módulo</h2>
        <form>
          {}
          <div className="mb-2 mt-4">
            <label htmlFor="title" className="app-label">
              Título do Módulo:
            </label>
            <input
              id="title"
              name="title"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="disciplineId" className="app-label">
              ID da Disciplina (DISCIPLINE_ID):
            </label>
            <input
              id="disciplineId"
              name="disciplineId"
              type="number"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="description" className="app-label">
              Descrição:
            </label>
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
              title="Cadastrar um novo módulo"
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