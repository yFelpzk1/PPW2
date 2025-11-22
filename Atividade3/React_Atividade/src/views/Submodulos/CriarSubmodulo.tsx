
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function CriarSubmodulo() {
  const getInputClass = () => {
    return "form-control app-label mt-2";
  };

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <h2>Novo Submódulo</h2>
        <form>
          {}
          <div className="mb-2 mt-4">
            <label htmlFor="title" className="app-label">
              Título do Submódulo:
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
            <label htmlFor="moduleId" className="app-label">
              ID do Módulo (MODULE_ID):
            </label>
            <input
              id="moduleId"
              name="moduleId"
              type="number"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="explanation" className="app-label">
              Explicação:
            </label>
            <textarea
              id="explanation"
              name="explanation"
              className={getInputClass()}
              rows={6} 
            />
          </div>

          <div className="btn-content mt-4">
            <button id="submit" type="submit" className="btn btn-success">
              <span className="btn-icon"><i><FaSave /></i></span>
              Salvar
            </button>
            <button id="cancel" type="button" className="btn btn-cancel">
              <span className="btn-icon"><i><MdCancel /></i></span>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}