import axios from 'axios';


const SET_LOADING = 'SET_LOADING'
const SET_TICKETS = 'SET_TICKETS'
const SET_MONEY = 'SET_MONEY'
const SET_VIEW_TICKETS = 'SET_VIEW_TICKETS'

const initialState = {
    loading:false,
    tickets:[],
    money:'RUB',
    viewTickets:[],
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
        default :
        return state
    }
}
export const setLoading = loading =>({type: SET_LOADING,loading})
export const setTickets = tickets =>({type: SET_TICKETS,tickets})
export const setMoney = money =>({type: SET_MONEY,money})
export const setViewTickets = viewTickets =>({type: SET_VIEW_TICKETS,viewTickets})

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
}

export const ssetViewTicketsTC = (viewTickets) => async (dispatch,getState) => {
    dispatch(setViewTickets(viewTickets))
}