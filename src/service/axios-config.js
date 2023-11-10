//Wendel Cavalcante
import axios from "axios";

const seguranca = axios.create({
  baseURL: "https://sinapses-backend.ia.pje.jus.br/rest/usuario",
  headers: {
    "Content-type": "application/x-www-form-urlencoded"
  }
});

const movimento = axios.create({
  baseURL: "https://sinapses-backend.ia.pje.jus.br/rest/modelo/executarServico/-tjro-jud/CLS_TIPO_MOVIMENTO_MAGISTRADO/4", 
  headers: {
    "Content-type": "application/json"
  }
});

export { seguranca, movimento };