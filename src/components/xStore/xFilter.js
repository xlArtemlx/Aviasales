import { makeAutoObservable } from "mobx"

class xFilter {
    stateTickets=[1,2,3,4,5]

    constructor() {
        makeAutoObservable(this)
    }

    xSetViewTickets (viewTickets:Array<number>) {
        const isExist = !!this.stateTickets.find( (value) => value === viewTickets )
        
         if(viewTickets=== 1){
            const updatedSettings = [1,2,3,4,5]
            this.stateTickets = updatedSettings
         } else {
    
            if(isExist) {
                const updatedSettings = this.stateTickets.filter( (value) =>  value !== viewTickets && value !== 1 )
                this.stateTickets = updatedSettings
            } else {
                const updatedSettings = [...this.stateTickets,viewTickets]
                updatedSettings.length > 3 ? this.stateTickets=[...updatedSettings,1] : this.stateTickets= updatedSettings
            }
    
         }
       
    }
    xSetTickets (stops:Array<number>) {
        this.stateTickets = stops
    }
    

}
export default new xFilter()