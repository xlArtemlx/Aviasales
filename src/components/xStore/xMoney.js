import { makeAutoObservable } from "mobx"
import axios from 'axios';

class xMoney {
    money='RUB';
    USD=0;
    EUR=0;

    constructor() {
        makeAutoObservable(this)
    }

    xSetExChange() {
        axios
        .get(
          "https://api.exchangeratesapi.io/latest?base=RUB",
        )
        .then((res)=>{
            this.USD = res.data.rates.USD
            this.EUR = res.data.rates.EUR
        })
        .catch((e)=>{
          console.log(e)
        })
    }


    xSetMoney(money:String):void {
        this.money = money
        this.xSetExChange()
    }


    

}
export default new xMoney()