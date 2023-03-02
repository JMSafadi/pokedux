import React, { useEffect } from 'react';
import './App.css'
import { Col, Spin } from 'antd';
import logo from './statics/logo.svg'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import Classes from './components/Classes';

function App() {
  const pokemons = useSelector(state => state.data.pokemonsFiltered, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);

  return (
    <div className="App">
      <Col span={5} offset={10} >
        <img src={logo} alt='logo'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <Classes></Classes>
      {/* <Classes/> */}
      { loading
      ?
        <Col offset={12} style={{marginTop: '30px'}}>
            <Spin spinning size='large'/>
        </Col>
      : 
        <PokemonList pokemons={pokemons}/>
      }
    </div>
  )
}

export default App
