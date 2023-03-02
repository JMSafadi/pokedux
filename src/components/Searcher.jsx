import React from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';
import StarButton from './StarButton';

const Searcher = () => {

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <Input.Search placeholder='Buscar...' onChange={handleOnChange}/>
            <StarButton><Button></Button></StarButton>
        </div>
    );
}

export default Searcher;
