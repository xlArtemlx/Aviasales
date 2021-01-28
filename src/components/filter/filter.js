import React from 'react'
import './filter.css'
import {useDispatch,useSelector} from 'react-redux'
import{setMoneyTC,setViewTicketsTC} from '../Redux/Reducer/mainReducer'



export const Filter = () => {
    const dispatch = useDispatch()
    const setMoney = useSelector(({date})=>date.money)
    const viewTickets = useSelector(({date})=>date.viewTickets)


    


    const _handleFilterUpdate = (event,set:Number) => {
        dispatch(setViewTicketsTC(set))
    }
    return(
        <div>
            <div className='exChange'>
                <span className='text-exCh'>
                    Валюта
                </span>
                <div className='text-ex-change'>
                    <button onClick={()=>{dispatch(setMoneyTC("RUB"))}} className={setMoney === 'RUB' ? 'block-money-on':'block-money-off'}>
                        RUB
                    </button>
                    <button onClick={()=>{dispatch(setMoneyTC("USD"))}} className={setMoney === 'USD' ? 'block-money-on':'block-money-off'}>
                        USD                        
                    </button>
                    <button onClick={()=>{dispatch(setMoneyTC("EUR"))}} className={setMoney === 'EUR' ? 'block-money-on':'block-money-off'}>
                       EUR 
                    </button>
                </div>
            </div>
            <div className='check-boxs'>
                <span>
                    Количество пересадок
                </span>
                <div>
                    <input
                        type="checkbox"
                        id="first" name="first"
                        checked={!!viewTickets.find( (value) => value === 1 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,1)}
                        className='check-box'
                    />
                    <label htmlFor='first'>
                        Все
                    </label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="second" name="second"
                        checked={!!viewTickets.find( (value) => value === 2 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,2)}
                        className='check-box'
                    />
                    <label htmlFor='second'>
                        Без пересадок
                    </label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="third" name="third"
                        checked={!!viewTickets.find( (value) => value === 3 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,3)}
                        className='check-box'
                    />
                    <label htmlFor="third">  1 пересадка</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="fourth" name="fourth"
                        checked={!!viewTickets.find( (value) => value === 4 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,4)}
                        className='check-box'
                    />
                    <label htmlFor="fourth">  2 пересадки</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="fifth" name="fifth"
                        checked={!!viewTickets.find( (value) => value === 5 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,5)}
                        className='check-box'
                    />
                    <label htmlFor="fifth">  3 пересадки</label>
                </div>


            </div>
        </div>
    )
}