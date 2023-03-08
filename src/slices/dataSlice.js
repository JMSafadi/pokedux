import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api/api'
import { setLoading } from './uiSlice'

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    pokemonsFavs: []
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
            const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite
            if (currentPokemonIndex >= 0) {
                state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite
            }
            const favoritePokemonIndex = state.pokemonsFavs.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId
            })
            if (isFavorite && favoritePokemonIndex >= 0) {
                state.pokemonsFavs.splice(favoritePokemonIndex, 1)
            } else if (!isFavorite && favoritePokemonIndex === -1) {
                state.pokemonsFavs.push(state.pokemonsFiltered[currentPokemonIndex])
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state.pokemons.filter(pokemon => pokemon.name.includes(action.payload))
            state.pokemonsFiltered = pokemonsFiltered
        }
    }
})

export const { setFavorite, setPokemons, setFilter, addFavorite } = dataSlices.actions

export default dataSlices.reducer
