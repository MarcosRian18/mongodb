import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchDados = async () => {
    try {
      const response = await fetch('http://localhost:3000/usuarios'); // A rota /dados deve apontar para o seu backend
      const dados = await response.json();
      setUsers(dados); // Atualiza o estado com os dados obtidos
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={fetchDados}>Listar Usuários</button>
        <div>
          <h2>Lista de Usuários</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                Nome: {user.name}, Email: {user.email}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
