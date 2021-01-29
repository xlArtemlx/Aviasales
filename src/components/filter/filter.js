import React from 'react'
import './filter.css'
import xMoney from '../xStore/xMoney'
import xFilter from '../xStore/xFilter'
import {observer} from 'mobx-react-lite'




export const Filter = observer(() => {
    const setMoney = xMoney.money
    const viewTickets = xFilter.stateTickets

    const only = (stops:Array<number>):void => {
        xFilter.xSetTickets(stops)
    }


    


    const _handleFilterUpdate = (event,set:Number):void => {
        xFilter.xSetViewTickets(set)
    }
    return(
        <div>
            <div className='exChange'>
                <span className='text-exCh'>
                    Валюта
                </span>
                <div className='text-ex-change'>
                    <button onClick={()=>{xMoney.xSetMoney('RUB')}} className={setMoney === 'RUB' ? 'block-money-on':'block-money-off'}>
                        RUB
                    </button>
                    <button onClick={()=>{xMoney.xSetMoney('USD')}} className={setMoney === 'USD' ? 'block-money-on':'block-money-off'}>
                        USD                        
                    </button>
                    <button onClick={()=>{xMoney.xSetMoney('EUR')}} className={setMoney === 'EUR' ? 'block-money-on':'block-money-off'}>
                       EUR 
                    </button>
                </div>
            </div>
            <div className='check-boxs'>
                <span>
                    Количество пересадок
                </span>
                <div className='input-one'>
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
                <div className='input-two'>
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
                     <button className='check-boxs-button-two' onClick={()=>only([2])}>
                        только
                    </button>
                </div>
                <div className='input-three'>
                    <input
                        type="checkbox"
                        id="third" name="third"
                        checked={!!viewTickets.find( (value) => value === 3 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,3)}
                        className='check-box'
                    />
                    <label htmlFor="third">  1 пересадка</label>
                    <button className='check-boxs-button-three' onClick={()=>only([3])}>
                        только
                    </button>
                </div>
                <div className='input-four'>
                    <input
                        type="checkbox"
                        id="fourth" name="fourth"
                        checked={!!viewTickets.find( (value) => value === 4 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,4)}
                        className='check-box'
                    />
                    <label htmlFor="fourth">  2 пересадки</label>
                    <button className='check-boxs-button-four' onClick={()=>only([4])}>
                        только
                    </button>
                </div>
                <div className='input-five'>
                    <input
                        type="checkbox"
                        id="fifth" name="fifth"
                        checked={!!viewTickets.find( (value) => value === 5 )}
                        onChange={(event: any)=>_handleFilterUpdate(event,5)}
                        className='check-box'
                    />
                    <label htmlFor="fifth">  3 пересадки</label>
                    <button className='check-boxs-button-five' onClick={()=>only([5])}>
                        только
                    </button>
                </div>


            </div>
        </div>
    )
})