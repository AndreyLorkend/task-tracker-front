import { mande } from 'mande'

const globalOptions = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
}

const API_HOST = 'http://localhost:8082/api'

export const api = mande(API_HOST, globalOptions)