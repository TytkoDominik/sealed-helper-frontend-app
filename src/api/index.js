import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/events'
})

export const getPlayerDeck = payload => api.post(`/sealed/player`, payload)
export const getAllPlayersDecks = payload => api.post(`/players`, payload)

const apis = {
    getPlayerDeck,
    getAllPlayersDecks,
}

export default apis