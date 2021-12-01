import { createStore, action } from 'easy-peasy';

const stores = createStore({
    respostaStores: {
        resposta: {
            nome: '',
            objetivo: '',
            pfOrPj: '',
            cpfCnpjValue: '',
            ie: '',
            rg: '',
            ativo: false,
            cep: ''
        },
        setResposta : action((state, payload) => {
            state.resposta = payload;
        })
    }
});

export default stores;