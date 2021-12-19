import axios from 'axios'

// CRIAR URL BASE PARA CHAMAR API
export const api = axios.create({
   baseURL: 'https://economia.awesomeapi.com.br'
})
