//Wendel Cavalcante
export const TOKEN_KEY = "@react-sinapses-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) != null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const doLogin = token => {
    localStorage.setItem(TOKEN_KEY, token);
  };
  export const doLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
  };