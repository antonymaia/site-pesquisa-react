import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route } from "react-router-dom";
import FormFinal from "../components/formFinal";
import FormInicial from "../components/formInicial";
import QuartoForm from "../components/quartoForm";
import SegundoForm from "../components/segundoForm";
import TerceiroForm from "../components/terceiroForm";
import "./root.css";

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Route exact path="/" component={FormInicial} />
        <Route path="/segundoForm" component={SegundoForm} />
        <Route path="/terceiroForm" component={TerceiroForm} />
        <Route path="/quartoForm" component={QuartoForm} />
        <Route path="/formFinal" component={FormFinal} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Root;
