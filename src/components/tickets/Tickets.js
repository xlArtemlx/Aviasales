import React from 'react'
import './Tickets.css'
import label from '../../images/label.png'
import fly from '../../images/index.jpeg'
import {calcDate,calcStops}from '../utils/calcDate'
import{calcMoney} from '../utils/calcDate'
import  xMoney  from "../xStore/xMoney";
import {observer} from 'mobx-react-lite'

export const Tickets = observer(({origin,originName,destination,destinationName,departureDate,departureTime,arrivalDate,arrivalTime,carrier,stops,price,setModal}) => {
    const money = xMoney.money
    const USD = xMoney.USD
    const EUR = xMoney.EUR
    return (
        <div className='item'>
          <div className='buy'>
              <div className='img'>
                  <img className='label' src={label} alt='labels'/>
              </div>
              <button className='price-button' onClick={()=>setModal(departureTime,calcDate(departureDate),arrivalTime,calcDate(arrivalDate),originName,destinationName)}>
                  <span className='text-price'>Купить</span>
                  <span className='text-price'>за {calcMoney(price,money,USD,EUR)}</span>
              </button>
          </div>

          <div className='info'>
              <div className='departure'>
                  <span className='text-fly'>{departureTime}</span>
                  <span className='text-city'>{origin},{originName}</span>
                  <span className='text-date'>{calcDate(departureDate)}</span>
              </div>
              <div className='stops'>
                  <span>{calcStops(stops)}</span>
                  <div className='img'>
                    <img className='fly' src={fly}  alt='fly'></img>
                  </div>
              </div>
              <div className='arrival'>
                <span className='text-fly'>{arrivalTime}</span>
                <span className='text-city'>{destination},{destinationName}</span>
                <span className='text-date'>{calcDate(arrivalDate)}</span>
              </div>

          </div>
        </div>
    )
})