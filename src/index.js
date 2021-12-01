import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import stores from "../src/stores/stores";
import Root from './routes/Root';

function App(){
  return(
    <StoreProvider store={stores}>
      <Root/>
    </StoreProvider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
