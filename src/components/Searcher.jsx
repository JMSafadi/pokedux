import React from 'react';
import { Col, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';
import StarButton from './StarButton';
import { useNavigate } from "react-router-dom";

const Searcher = () => {

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    const navigate = useNavigate()

    const buttonNavToggle = () => {
        navigate('/favorites')
    }

    return (
        <>
            <Col span={8} offset={8} style={{display:'flex', gap:'10px'}}>
                <Input.Search placeholder='Buscar...' onChange={handleOnChange}/>
                <StarButton onClick={buttonNavToggle} />
            </Col>
        </>
    );
}

export default Searcher;
