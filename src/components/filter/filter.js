import React from 'react'
import './filter.css'
import {useDispatch,useSelector} from 'react-redux'
import{setMoneyTC} from '../Redux/Reducer/mainReducer'



export const Filter = () => {
    const dispatch = useDispatch()
    const setMoney = useSelector(({date})=>date.money)
    return(
        <div>
            <div className='exChange'>
                <text className='text-exCh'>
                    Валюта
                </text>
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
                <text>
                    Количество пересадок
                </text>
                <div>
                    <input
                        type="checkbox"
                        checked={setMoney}
                        onChange={()=>{}}
                        className='check-box'
                    />
                    <text>
                        Все
                    </text>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={setMoney}
                        onChange={()=>{}}
                        className='check-box'
                    />
                    <text>
                        Без пересадок
                    </text>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={setMoney}
                        onChange={()=>{}}
                        className='check-box'
                    />
                    <text>
                        1 пересадка
                    </text>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={setMoney}
                        onChange={()=>{}}
                        className='check-box'
                    />
                    <text>
                        2 пересадки
                    </text>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={setMoney}
                        onChange={()=>{}}
                        className='check-box'
                    />
                    <text>
                        3 пересадки
                    </text>
                </div>


            </div>
        </div>
    )
}