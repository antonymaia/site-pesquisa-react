import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function FormFinal() {
  const resposta = useStoreState((state) => state.respostaStores.resposta);
  const setResposta = useStoreActions(
    (actions) => actions.respostaStores.setResposta
  );
  const { isLoading, error, data } = useQuery("cep", () =>
    fetch(`https://viacep.com.br/ws/${resposta.cep}/json/`).then((res) => res.json())
  );

  return (
    <div className="container">
      <div>
        <label>Nome:</label>
        <label>{resposta.nome}</label>
      </div>
      <div>
        <label>Objetivo:</label>
        <label>{resposta.objetivo}</label>
      </div>
      {resposta.pfOrPj === "PF" && (
        <di>
          <div>
            <label>CPF:</label>
            <label>{resposta.cpfCnpjValue}</label>
          </div>
          <div>
            <label>RG:</label>
            <label>{resposta.rg}</label>
          </div>
        </di>
      )}
      {resposta.pfOrPj === "PJ" && (
        <di>
          <div>
            <label>CNPJ:</label>
            <label>{resposta.cpfCnpjValue}</label>
          </div>
          <div>
            <label>IE:</label>
            <label>{resposta.ie}</label>
          </div>
        </di>
      )}
      {resposta.ativo === true && (
        <div>
          <label>Ativo:</label>
          <label>SIM</label>
        </div>
      )}
      {resposta.ativo === false && (
        <div>
          <label>Ativo:</label>
          <label>NÃO</label>
        </div>
      )}
      {data != null && (
        <div>
          <div>
            <label>Cidade:</label>
            <label>{data.localidade}</label>
          </div>
          <div>
            <label>Estado:</label>
            <label>{data.uf}</label>
          </div>
        </div>
      )}
      <div className="div_link_form_final">
        <Link
          to="/"
          onClick={(e) => {
            resposta.nome = "";
            resposta.objetivo = "";
            resposta.pfOrPj = "";
            resposta.cpfCnpjValue = "";
            resposta.ie = "";
            resposta.rg = "";
            resposta.ativo = false;
            setResposta(resposta);
          }}
        >
          Nova Pesquisa
        </Link>
      </div>
    </div>
  );
}
