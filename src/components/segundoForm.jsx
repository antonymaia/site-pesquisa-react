import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

export default function SegundoForm() {
  const resposta = useStoreState((state) => state.respostaStores.resposta);
  const [pfOrPj, setPfOrPj] = useState(resposta.pfOrPj);
  const [ie, setIe] = useState(resposta.ie);
  const [cpfCnpjValue, setCpfCnpjValue] = useState(resposta.cpfCnpjValue);
  const [rg, setRg] = useState(resposta.rg);
  const setResposta = useStoreActions(
    (actions) => actions.respostaStores.setResposta
  );

  const onClick = (e) => {
    setPfOrPj(e.target.value);
    setCpfCnpjValue("");
    setRg("");
    setIe("");
    resposta.pfOrPj = pfOrPj;
    resposta.ie = ie;
    resposta.cpfCnpjValue = cpfCnpjValue;
    resposta.rg = rg;
    setResposta(resposta);
  };

  function DivPfOrPj(props) {
    if (pfOrPj === "PJ") {
      return (
        <div>
          <label>CNPJ</label>
          <input
            type="number"
            value={cpfCnpjValue}
            onChange={(e) => setCpfCnpjValue(e.target.value)}
            className="form-control"
          />
          <label>IE</label>
          <input
            type="number"
            value={ie}
            onChange={(e) => setIe(e.target.value)}
            className="form-control"
          />
        </div>
      );
    } else if (pfOrPj === "PF") {
      return (
        <div>
          <label>CPF</label>
          <input
            type="number"
            value={cpfCnpjValue}
            onChange={(e) => setCpfCnpjValue(e.target.value)}
            className="form-control"
            id="cpf"
          />
          <label>RG</label>
          <input
            type="number"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            className="form-control"
            id="rg"
          />
        </div>
      );
    }
    return null;
  }

  return (
    <div className="container">
      <div className="div_navegador">
        <Link to="/" className="link_voltar">Voltar</Link>
        <Link
          to="/terceiroForm"
          onClick={(e) => {
            resposta.pfOrPj = pfOrPj;
            resposta.ie = ie;
            resposta.cpfCnpjValue = cpfCnpjValue;
            resposta.rg = rg;
            setResposta(resposta);
          }}
        >
          Próximo
        </Link>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          name="pfOrPj"
          type="radio"
          value="PJ"
          id="flexCheckDefault"
          onClick={onClick}
          checked={pfOrPj === "PJ"}
        />
        <label className="form-check-label">PJ</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          name="pfOrPj"
          type="radio"
          value="PF"
          id="flexCheckDefault"
          onClick={onClick}
          checked={pfOrPj === "PF"}
        />
        <label className="form-check-label">PF</label>
      </div>
      <DivPfOrPj />
    </div>
  );
}
