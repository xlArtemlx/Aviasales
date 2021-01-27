export const calcDate = (str) => {
    let strYear:Number = Number(str.slice(6,8))
        let strMonth:Number = Number(str.slice(3,5))
        let strDay:Number = Number(str.slice(0,2))

        const month:Number = new Date(strYear +2000 ,strMonth-1,strDay).getMonth()
        const day:Number = new Date(strYear +2000 ,strMonth-1,strDay).getDay()
        let dayWeek:String
        let monthYear:String

        switch(day){
            case 0:
                dayWeek = "Вс"
                break
            case 1:
                dayWeek = "Пн"
                break
            case 3:
                dayWeek = "Вт"
                break
            case 4:
                dayWeek = "Ср"
                break
            case 5:
                dayWeek = "Чт"
                break
            case 6:
                dayWeek = "Пт"
                break
            default:
                dayWeek = "Сб"
        }
        switch(month){
            case 0:
                monthYear = "янв"
                break
            case 1:
                monthYear = "фев"
                break
            case 2:
                monthYear = "мар"
                break
            case 3:
                monthYear = "апр"
                break
            case 4:
                monthYear = "мая"
                break
            case 5:
                monthYear = "июн"
                break
            case 6:
                monthYear = "июл"
                break
            case 7:
                monthYear = "авг"
                break
            case 8:
                monthYear = "сен"
                break
            case 9:
                monthYear = "окт"
                break
            case 10:
                monthYear = "нояб"
                break
            default:
                monthYear = "дек"
        }

        const newDate = `${strDay} ${monthYear} ${strYear +2000}, ${dayWeek} `
       return newDate

}
export const calcStops = (count) => {
    if(count === 0 || count > 4){
        return `${count} пересадок`
    } else if(count === 1) {
        return `${count} пересадка`
    } else {
        return `${count} пересадки`
    }
}
export const calcMoney = (price:Number,money:String) => {
    const USD:Number = 0.013
    const EUR:Number = 0.0109
    if(money === 'EUR'){
        return `${Math.floor(price * EUR)} EUR`
    } else if(money==="USD"){
        return `${Math.floor(price * USD)} USD`
    } else {
        return `${price} RUB`
    }

}