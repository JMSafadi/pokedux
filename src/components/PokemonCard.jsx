import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

const PokemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch()

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    const typesString = types.map(elem => elem.type.name).join(' - ')

    return (
        <Card
        title={name[0].toUpperCase() + name.substring(1)}
        cover={<img src={image} alt={name}/>}
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
        >
            <Meta description={typesString}/>
        </Card>
    );
}
 
export default PokemonCard;
