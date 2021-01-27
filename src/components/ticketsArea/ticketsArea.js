import React ,{useEffect}from 'react'
import {useDispatch} from 'react-redux'
import {AppHeader} from '../appHeader/AppHeader'
import './ticketsArea.css'
import {setTicketsTC} from '../Redux/Reducer/mainReducer'
import {TicketsList} from '../ticketsList/TicketsList' 
import {Filter} from '../filter/filter'



export const TicketsArea = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setTicketsTC())
        
    },[])



    return (
        <div className='area'>
           <AppHeader></AppHeader>
           <div className='ticketsArea'>
            <div className='filters'>
                <Filter/>
            </div>
            <div>
                <TicketsList/>
            </div>
           </div>
        </div>
    )
}