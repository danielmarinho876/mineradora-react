import React, { useState } from "react";

export default function Servicos() {
  const [descricao, setDescricao] = useState("");
  const [servicos, setServicos] = useState([]);

  function cadastrar() {
    if (!descricao) {
      alert("Digite a descrição");
      return;
    }

    const novoServico = {
      id: Date.now(),
      descricao
    };

    setServicos([...servicos, novoServico]);

    setDescricao("");
  }

  return (
    <div className="servico">
      <h2>Gestão de Serviços</h2>

      <input
        className="input"
        type="text"
        placeholder="Descrição do Serviço"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <button 
      className="btn"
      onClick={cadastrar}>
        Cadastrar
      </button>

      <ul>
        {servicos.map((i) => (
          <li key={i.id}>
            {i.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}