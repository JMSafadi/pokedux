import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api/api'
import { setLoading } from './uiSlice'

const initialState = {
    pokemons: [],
    pokemonsFiltered : []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon()
        const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLoading(false))
    }
)

export const dataSlices = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
            state.pokemonsFiltered = action.payload
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemonsFiltered.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId
            })
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite
                state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state.pokemons.filter(pokemon => pokemon.name.includes(action.payload))
            state.pokemonsFiltered = pokemonsFiltered
        }
    }
})

export const { setFavorite, setPokemons, setFilter } = dataSlices.actions

export default dataSlices.reducer
