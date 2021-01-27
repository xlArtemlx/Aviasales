import React from 'react'
import './Tickets.css'
import label from '../../images/label.png'
import fly from '../../images/index.jpeg'
import {calcDate,calcStops}from '../utils/calcDate'
import {useSelector} from 'react-redux'
import{calcMoney} from '../utils/calcDate'

export const Tickets = ({origin,originName,destination,destinationName,departureDate,departureTime,arrivalDate,arrivalTime,carrier,stops,price}) => {
    const money = useSelector(({date})=>date.money)
    return (
        <div className='item'>
          <div className='buy'>
              <div className='img'>
                  <img className='label' src={label} alt='labels'/>
              </div>
              <button className='price-button'>
                  <text className='text-price'>Купить</text>
                  <text className='text-price'>за {calcMoney(price,money)}</text>
              </button>
          </div>

          <div className='info'>
              <div className='departure'>
                  <text className='text-fly'>{departureTime}</text>
                  <text className='text-city'>{origin},{originName}</text>
                  <text className='text-date'>{calcDate(departureDate)}</text>
              </div>
              <div className='stops'>
                  <text>{calcStops(stops)}</text>
                  <div className='img'>
                    <img className='fly' src={fly}  alt='fly'></img>
                  </div>
              </div>
              <div className='arrival'>
                <text className='text-fly'>{arrivalTime}</text>
                <text className='text-city'>{destination},{destinationName}</text>
                <text className='text-date'>{calcDate(arrivalDate)}</text>
              </div>

          </div>
        </div>
    )
}