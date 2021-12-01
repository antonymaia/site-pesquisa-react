import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function QuartoForm() {
  const [cep, setCep] = useState("");
  const resposta = useStoreState((state) => state.respostaStores.resposta);
  const setResposta = useStoreActions(
    (actions) => actions.respostaStores.setResposta
  );

  return (
    <div className="container">
      <div className="div_navegador">
        <Link className="link_voltar" to="/terceiroForm">
          Voltar
        </Link>
        <Link
          to="/formFinal"
          onClick={(e) => {
              resposta.cep = cep;
            setResposta(resposta);
          }}
        >
          Finalizar
        </Link>
      </div>
      <div>
        <label>CEP:</label>
        <input
          type="number"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="form-control"
          id="cep"
        />
      </div>
    </div>
  );
}
