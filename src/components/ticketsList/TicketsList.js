import React from 'react'
import './TicketsList.css'
import {Tickets} from '../tickets/Tickets'
import './TicketsList.css'
import xTickets from "./../xStore/xTickets";
import xFilter from "../xStore/xFilter";
import {observer} from 'mobx-react-lite'

export const TicketsList = observer(({setModal}) => {
    const tickets:number[] = xTickets.tickets
    const viewTickets:number[] = xFilter.stateTickets

    const renderList = () => {

        return(
             tickets.map((el,index)=>{
                        const view = !!viewTickets.find(element => element-2 === el.stops )
                        if(view){
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
                        setModal={setModal}
                        />
                        } else {
                            return null
                        }
                    })
        )
    }
   
    return(
        <div className='box'>
            {
                viewTickets.length ?
                renderList()
                :
                <div className='empty'>
                    <span className='empty-text'>
                        Выберити опции
                    </span>
                </div>
            }
            
        </div>
    )
})