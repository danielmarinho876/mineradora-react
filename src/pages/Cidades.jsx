import React, { useState } from "react";

export default function Cidades() {
  const [nome, setNome] = useState("");
  const [cidades, setCidades] = useState([]);

  function cadastrar() {
    if (!nome) {
      alert("Digite o nome da cidade");
      return;
    }

    const novaCidade = {
      id: Date.now(),
      nome
    };

    setCidades([...cidades, novaCidade]);
    setNome("");
  }

  return (
    <div className="cidade">
      <h2>Gestão de Cidades</h2>

      <input
        className="input"
        type="text"
        placeholder="Nome da Cidade"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button 
      className="btn"
      onClick={cadastrar}>
        Cadastrar
      </button>

      <ul>
        {cidades.map((i) => (
          <li key={i.id}>
            {i.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}