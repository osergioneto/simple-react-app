import React, { useState } from "react";
import api from "./services/api";
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  useState(() => {
    api.get("/repositories").then(({ data }) => {
      setRepositories(data)
    });
  });

  async function handleAddRepository() {
    const { data } = await api.post("/repositories", {
      title: `Project ${new Date().getMilliseconds()}`,
      owner: "Sérgio Neto",
      techs: ["HE", "HE", "HE"],
    });

    setRepositories([...repositories, data]);
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
