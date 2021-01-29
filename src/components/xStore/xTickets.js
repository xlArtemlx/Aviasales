import { makeAutoObservable } from "mobx"
import axios from 'axios';

class xTickets {
    tickets=[]

    constructor() {
        makeAutoObservable(this)
    }

      xSetTicketsTC():void {
        axios
        .get(
          'tickets.json',
        )
        .then((res)=>{
            this.tickets= [...res.data.tickets]
        })
        .catch((e)=>{
          console.log(e)
        })
    }
    

}
export default new xTickets ()