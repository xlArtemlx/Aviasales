import axios from 'axios';
import moment from "moment";


const SET_LOADING = 'SET_LOADING'
const SET_TICKETS = 'SET_TICKETS'
const SET_MONEY = 'SET_MONEY'
const SET_VIEW_TICKETS = 'SET_VIEW_TICKETS'
const SET_USD = 'SET_USD'
const SET_EUR = 'SET_EUR'

const initialState = {
    loading:false,
    tickets:[],
    money:'RUB',
    viewTickets:[1,2,3,4,5],
    USD:0,
    EUR:0,
}
export const MainReducer = (state = initialState,action) =>{
    switch(action.type) {
        case SET_LOADING : {
            return {
                ...state,
                loading:action.loading
            }
        }
        case SET_TICKETS : {
            return {
                ...state,
                tickets:action.tickets
            }
        }
        case SET_MONEY : {
            return {
                ...state,
                money:action.money
            }
        }
        case SET_VIEW_TICKETS : {
            return {
                ...state,
                viewTickets:action.viewTickets
            }
        }
        case SET_USD : {
            return {
                ...state,
                USD:action.USD
            }
        }
        case SET_EUR : {
            return {
                ...state,
                EUR:action.EUR
            }
        }
        default :
        return state
    }
}
export const setLoading = loading =>({type: SET_LOADING,loading})
export const setTickets = tickets =>({type: SET_TICKETS,tickets})
export const setMoney = money =>({type: SET_MONEY,money})
export const setViewTickets = viewTickets =>({type: SET_VIEW_TICKETS,viewTickets})
export const setUSD = USD =>({type: SET_USD,USD})
export const setEUR = EUR =>({type: SET_EUR,EUR})

export const setLoadingTC = (loading) => async (dispatch,getState) => {
    dispatch(setLoading(loading))
}

export const setTicketsTC = () => async (dispatch,getState) => {
    axios
    .get(
      'tickets.json',
    )
    .then((res)=>{
        dispatch(setTickets(res.data.tickets))
    })
    .catch((e)=>{
      console.log(e)
    })
}

export const setMoneyTC = (money) => async (dispatch,getState) => {
    dispatch(setMoney(money))
    await dispatch(getExchange())
}

export const setViewTicketsTC = (viewTickets) => async (dispatch,getState) => {
    let time =moment("12.05.18",'DD.MM.YYYY').format("ll")
    console.log(time)
    const stateTickets = getState().date.viewTickets
    const isExist = !!stateTickets.find( (value) => value === viewTickets )
    
     if(viewTickets=== 1){
        const updatedSettings = [1,2,3,4,5]
        dispatch(setViewTickets(updatedSettings))
     } else {

        if(isExist) {
            const updatedSettings = stateTickets.filter( (value) =>  value !== viewTickets && value !== 1 )
            dispatch(setViewTickets(updatedSettings))
        } else {
            const updatedSettings = [...stateTickets,viewTickets]
            updatedSettings.length > 3 ? dispatch(setViewTickets([...updatedSettings,1])) : dispatch(setViewTickets(updatedSettings))
        }

     }
    //  12 мая 2018, Пт ll ddd
}


export const setUSDTC = (USD) => async (dispatch,getState) => {
    dispatch(setUSD(USD))
}
export const setEURTC = (EUR) => async (dispatch,getState) => {
    dispatch(setEUR(EUR))
}

export const getExchange = () => async (dispatch,getState) => {
    axios
    .get("https://api.exchangeratesapi.io/latest?base=RUB")
    .then(res=>{
        dispatch(setUSD(res.data.rates.USD))
        dispatch(setEUR(res.data.rates.EUR))
    })
    .catch((e)=>{
        console.log(e)
      })
}

