import React from 'react'
import './card-style.css'
import { Rating } from '@mui/material'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.url} alt='Property' />
            </div>
            <div className='card-body'>
                <p className='card-title'>{props.title}</p>
                <p className='card-text'>{props.text}</p>
                <Rating name="read-only" value={Number(props.rating)} precision={0.5} readOnly sx={{color: '#277ab6'}}/>
                <p className='card-price-tag'>
                    <span>{props.priceTag}: </span>
                    <span className='card-price'>{props.price}</span>
                </p>
            </div>
        </div>
    )
}

export default Card;