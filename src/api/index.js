import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sealed-helper.azurewebsites.net/events'
})

export const getPlayerDeck = payload => api.post(`/sealed/player`, payload)
export const getAllPlayersDecks = payload => api.post(`/players`, payload)
export const rerollPlayerDeck = payload => api.post(`/sealed/reroll`, payload)

const apis = {
    getPlayerDeck,
    getAllPlayersDecks,
    rerollPlayerDeck
}

export default apis