import React, { useState, useEffect } from 'react';
import { equipamentoService } from '../services/api'; 

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);
  const [nome, setNome] = useState('');
  const [setor, setSetor] = useState('');

  
  useEffect(() => {
    carregarEquipamentos();
  }, []);

  const carregarEquipamentos = async () => {
    try {
      const response = await equipamentoService.listar();
      setEquipamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar equipamentos", error);
    }
  };

  const cadastrar = async () => {
    if (!nome || !setor) return alert("Atenção preencha todos os campos!");
    try {
      await equipamentoService.criar({ 
          nome,  setor }); 
      setNome('');
      setSetor('');
      carregarEquipamentos(); 
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  };

  return (
    <div className="equipamentos">
      <h2>Gestão de Equipamentos</h2>
      
      
      <div  className="form-box">
        <h3>Novo Equipamento</h3>
        <input 
          className="input"
          type="text" 
          placeholder="Digite o nome do Equipamento" 
          value={nome}
          onChange={(e) => setNome(e.target.value)} 
           
        />
        <input 
        className="input"
          type="text" 
          placeholder="Digite o setor" 
          value={setor}
          onChange={(e) => setSetor(e.target.value)} 

        />
        <button className="btn" onClick={cadastrar}>Cadastrar</button>
      </div>

      <h3>Equipamentos Cadastrados</h3>
      <ul>
        {equipamentos.map((i) => (
          <li key={i.id}>
            <strong>{i.nome}</strong> - Setor: {i.setor}
          </li>
        ))}
      </ul>
    </div>
  );
}