import React from 'react'
import './TicketsList.css'
import {useSelector} from 'react-redux'
import {Tickets} from '../tickets/Tickets'
import './TicketsList.css'

export const TicketsList = () => {
    const tickets = useSelector(({date})=> date.tickets)
    console.log(tickets)
    return(
        <div className='box'>
            {
                tickets.map((el,index)=>{
                    return <Tickets 
                    key={index} 
                    origin={el.origin} 
                    originName={el.origin_name}
                    destination={el.destination}
                    destinationName={el.destination_name}
                    departureDate={el.departure_date}
                    departureTime={el.departure_time}
                    arrivalDate={el.arrival_date}
                    arrivalTime={el.arrival_time}
                    carrier={el.carrier}
                    stops={el.stops}
                    price={el.price}
                    />
                })
            }
            
        </div>
    )
}