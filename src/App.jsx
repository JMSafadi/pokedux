import React, { useEffect } from 'react';
import './App.css'
import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import PokemonFavList from './components/PokemonFavList';

function App() {
  const pokemons = useSelector(state => state.data.pokemonsFiltered, shallowEqual)
  const pokemonsFavs = useSelector(state => state.data.pokemonsFavs, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PokemonList pokemons={pokemons}/>,
    },
    {
      path: '/favorites',
      element: <PokemonList pokemons={pokemonsFavs}/>,
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={router}>
        <BrowserRouter>
              <Routes>
                  { loading
                    ?
                      <Col offset={12} style={{marginTop: '30px'}}>
                          <Spin spinning size='large'/>
                      </Col>
                    : 
                    <>
                      <Route path='/' element={<PokemonList/>} />
                      <Route path='/favorites' element={<PokemonFavList/>} />
                    </>
                  }
              </Routes>
        </BrowserRouter>
      </RouterProvider>
    </div>
  )
}

export default App
