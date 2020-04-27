import React from "react";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  useState(() => {
    api.get("/repositories").then(({ data }) => {
      setRepositories(data)
    });
  });

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => {
         return (
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
         )
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
