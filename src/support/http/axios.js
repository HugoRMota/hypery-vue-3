import axios from "axios";

const api = axios.create({ baseURL: "https://api.themoviedb.org/3/trending" });

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Request interceptor
api.interceptors.request.use(
  async (request) => {
    // let token = await vm.$auth.getTokenSilently();
    // wsVariables.accessToken = token;// Guarda o token de acesso em accessToken para a conexão com websocket.
    request.headers.common["Content-Type"] = "application/json";
    // request.headers.common["Authorization"] = `Bearer ${token}`;
    return request;
  },
  (error) => {
    if (isLocalhost) console.log("error", error);
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (Object(error.response).hasOwnProperty("status")) {
        if (error.response.status === 401) {
          //Não autorizado
          if (isLocalhost) console.log("Usuário não autorizado");
          // Atualizar refresh token
        }
      }
    }
    return Promise.reject(error.response);
  }
);

export default api;
