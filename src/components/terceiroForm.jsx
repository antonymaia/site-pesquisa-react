import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

export default function TerceiroForm() {
  const resposta = useStoreState((state) => state.respostaStores.resposta);
  const setResposta = useStoreActions(
    (actions) => actions.respostaStores.setResposta
  );
  const [ativo, setAtivo] = useState(resposta.ativo);
  const onClick = (e) => {
    setAtivo(ativo ? false : true);
  };
  return (
    <div className="container">
      <div className="div_navegador">
        <Link
          className="link_voltar"
          to="/segundoForm"
          onClick={(e) => {
            resposta.ativo = ativo;
            setResposta(resposta);
          }}
        >
          Voltar
        </Link>
        <Link
          to="/quartoForm"
          onClick={(e) => {
            resposta.ativo = ativo;
            setResposta(resposta);
          }}
        >
          Finalizar
        </Link>
      </div>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          onClick={onClick}
          checked={ativo}
        />
        <label>Ativo</label>
      </div>
    </div>
  );
}
