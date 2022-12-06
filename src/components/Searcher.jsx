import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';

const Searcher = () => {

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <div>
            <Input.Search placeholder='Buscar...' onChange={handleOnChange}/>
        </div>
    );
}

export default Searcher;
