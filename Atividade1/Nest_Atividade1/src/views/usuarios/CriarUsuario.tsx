
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function CriarUsuario() {
  
  const getInputClass = () => {
    return "form-control app-label mt-2";
  };

  return (

    <div className="display">
      <div className="card animated fadeInDown">
        <h2>Novo Usuário</h2>
        <form>
          {}
          <div className="mb-2 mt-4">
            <label htmlFor="username" className="app-label">
              Nome de Usuário:
            </label>
            <input
              id="username"
              name="username"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="email" className="app-label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="password" className="app-label">
              Senha:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={getInputClass()}
              autoComplete="off"
            />
          </div>

          {}
          <div className="btn-content mt-4">
            <button
              id="submit"
              type="submit"
              className="btn btn-success"
              title="Cadastrar um novo usuário"
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