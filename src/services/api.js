import { supabase } from "../server/supabase";

const equipamentosteste = [
  { id: 1, nome: "Escavadeira", setor: "Extração" },
  { id: 2, nome: "Caminhão Fora", setor: "Transporte" }
];

export const equipamentoService = {
  listar: async () => {
    supabase.from('cidades').insert([
      { id: '123', nome: 'teste' }
    ])
    return { data: equipamentosteste };
  },
  criar: async (dados) => {
    console.log("Simulando cadastro no banco:", dados);
    equipamentosteste.push({ id: Date.now(), ...dados });
    return { data: dados };
  }
};

export const cidadeService = { listar: async () => (
  { data: [] }), criar: async () => {} };
export const funcionarioService = { listar: async () => (
  { data: [] }), criar: async () => {} };
export const servicoService = { listar: async () => (
  { data: [] }), criar: async () => {} };