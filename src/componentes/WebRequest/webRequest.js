import axios from 'axios';

const webRequest = axios.create({
  baseURL: 'https://localhost:8080', // Substitua pela base URL da sua API
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros cabeçalhos globais necessários aqui
  },
});


// Interceptor para requisições
webRequest.interceptors.request.use(
    config => {
      // Aqui você pode adicionar configurações como tokens de autenticação antes da requisição ser enviada
      return config;
    },
    error => {
      // Tratamento de erro antes da requisição ser enviada
      return Promise.reject(error);
    }
  );
  
  // Interceptor para respostas
  webRequest.interceptors.response.use(
    response => {
      // Qualquer código de status que esteja no intervalo de 2xx causa este trigger
      return response;
    },
    error => {
      // Qualquer código de status fora do intervalo de 2xx causa este trigger
      // Aqui você pode tratar os erros da resposta, como redirecionamentos para login em caso de 401, etc.
      return Promise.reject(error);
    }
  );
  
  export default webRequest;