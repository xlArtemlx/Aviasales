import axios from 'axios';



class Data  {
  constructor() {
    super();
  }
    async getData(){
      axios
      .get(
        'https://gitlab.smissltd.com/svv1313/aviasalesreact/blob/master/tickets.json',
        
      )
      .then((res)=>{
        console.log(res)
      })
      .catch((e)=>{
        console.log(e)
      })
        

    }
}

export default new Data