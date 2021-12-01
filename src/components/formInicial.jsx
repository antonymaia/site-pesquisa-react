import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

export default function FormInicial() {
  const resposta = useStoreState((state) => state.respostaStores.resposta);
  const setResposta = useStoreActions(
    (actions) => actions.respostaStores.setResposta
  );
  const [nome, setNome] = useState(resposta.nome);
  const [objetivo, setObjetivo] = useState(resposta.objetivo);

  return (
    <div className="container">
      <div className="div_navegador">
        <Link
          to="/segundoForm"
          onClick={(e) => {
            resposta.nome = nome;
            resposta.objetivo = objetivo;
            setResposta(resposta);
          }}
        >
          Próximo
        </Link>
      </div>
      <div>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control"
          id="nome"
        />
      </div>
      <div>
        <label>Objetivo</label>
        <textarea
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          className="form-control"
          id="objetivo"
        />
      </div>
    </div>
  );
}
