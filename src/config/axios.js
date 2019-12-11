import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'http://localhost:4000'
});

export default clienteAxios;

// Creamos esta pagina y esta funcion para que sea mas facil pasar la url en la accion