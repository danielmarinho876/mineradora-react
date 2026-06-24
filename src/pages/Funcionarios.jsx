import React, { useState } from "react";

export default function Funcionarios() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [funcionarios, setFuncionarios] = useState([]);

  function cadastrar() {
    if (!nome || !cargo) {
      alert("Preencha todos os campos");
      return;
    }

    const novoFuncionario = {
      id: Date.now(),
      nome,
      cargo
    };

    setFuncionarios([...funcionarios, novoFuncionario]);

    setNome("");
    setCargo("");
  }

  return (
    <div className="funcionario">
      <h2>Gestão de Funcionários</h2>

      <input
        className="input"
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        className="input"
        type="text"
        placeholder="Digite o cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />

      <button className="btn" onClick={cadastrar}>
        Cadastrar
      </button>

      <ul>
        {funcionarios.map((i) => (
          <li key={i.id}>
            {i.nome} - {i.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
}