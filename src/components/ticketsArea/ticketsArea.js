import React ,{useEffect,useState}from 'react'
import {AppHeader} from '../appHeader/AppHeader'
import './ticketsArea.css'
import {TicketsList} from '../ticketsList/TicketsList' 
import {Filter} from '../filter/filter'
import { Modal} from '../modal/Modal'
import validator from 'validator';
import xTickets from "./../xStore/xTickets";
import {observer} from 'mobx-react-lite'



export const TicketsArea = observer(() => {
    const[showModal,setShowModal]=useState(false)
    const[errorText,setErrorText]=useState(false)
    const[success,setSuccess]=useState(false)

    const[modalInfo,setModalInfo]=useState({
        departureTime:'',
        departureDate:'',
        arrivalTime:'',
        arrivalDate:'',
        originName:'',
        destinationName:'',
    })

    const[form,setForm]=useState({
       firstName:'',
       secondName:'',
       passport:'',
       phone:'',
       eMail:'',
    })
    const[validForm,setValidForm]=useState({
        firstName:true,
        secondName:true,
        passport:true,
        phone:true,
        eMail:true,
     })

    useEffect(()=>{
        // dispatch(setTicketsTC())
        xTickets.xSetTicketsTC()
    },[])


    const setModal = (departureTime,departureDate,arrivalTime,arrivalDate,originName,destinationName) => {
        setModalInfo({
            departureTime:departureTime,
            departureDate:departureDate,
            arrivalTime:arrivalTime,
            arrivalDate:arrivalDate,
            originName:originName,
            destinationName:destinationName,
        })
        setForm({
            firstName:'',
            secondName:'',
            passport:'',
            phone:'',
            eMail:'',
        })
        setValidForm({
            firstName:true,
            secondName:true,
            passport:true,
            phone:true,
            eMail:true,
            
        })
        setErrorText(false)
        setShowModal(!showModal)
    }
    const openSuccess = () => {
        setSuccess(!success)
    }

    const inputFirstName = (e) => {
        const value:String = e.target.value
        setErrorText(false)
        setValidForm({...validForm,firstName:true})
        setForm(
            {
                ...form,
                firstName:value.trim()
            }
        )
    }
    const inputSecondName = (e) => {
        const value:String = e.target.value
        setErrorText(false)
        setValidForm({...validForm,secondName:true})
        setForm(
            {
                ...form,
                secondName:value.trim()
            }
        )
    }
    const inputPassport = (e) => {
        const value:String = e.target.value
        setValidForm({...validForm,passport:true})
        setErrorText(false)
        setForm(
            {
                ...form,
                passport:value.trim()
            }
        )
    }
    const inputPhone = (e) => {
        const value:String = e.target.value
        setValidForm({...validForm,phone:true})
        setErrorText(false)
        setForm(
            {
                ...form,
                phone:value.trim()
            }
        )
    }
    const inputEmail = (e) => {
        const value:String = e.target.value
        setValidForm({...validForm,eMail:true})
        setErrorText(false)
        setForm(
            {
                ...form,
                eMail:value.trim()
            }
        )
    }

    const sendForm = () => {
        if(form.firstName.length < 3){
            setValidForm({...validForm,firstName:false})
            setErrorText(true)
            return
        }
        if(form.secondName.length < 3){
            setValidForm({...validForm,secondName:false})
            setErrorText(true)
            return
        }
        if(form.passport.length < 4){
            setValidForm({...validForm,passport:false})
            setErrorText(true)
            return
        }
        if(!validator.isMobilePhone(form.phone,["uk-UA"])){
            setValidForm({...validForm,phone:false})
            setErrorText(true)
            return
        }
        if(!validator.isEmail(form.eMail)){
            setValidForm({...validForm,eMail:false})
            setErrorText(true)
            return
        }

        if(validForm.firstName&&validForm.secondName&&validForm.passport&&validForm.phone&&validForm.eMail){
            setModal()
            openSuccess()
        }
    }

  

    return (
        <div className='area'>
           <AppHeader></AppHeader>
           <div className='ticketsArea'>
            <div className='filters'>
                <Filter/>
            </div>
            <div>
                <TicketsList setModal={setModal}/>
            </div>
           </div>
           <div >
                <Modal show={showModal} setModal={setModal}>

                <div className='fly-info'>
                    <span className='fly-info-text'>
                       Отправление {modalInfo.departureDate} в {modalInfo.departureTime}
                    </span>
                    <span className='fly-info-text'>
                       Прибытие {modalInfo.arrivalDate} в {modalInfo.arrivalTime}
                    </span>
                    <span className='fly-info-text'>
                       {modalInfo.originName} - {modalInfo.destinationName}
                    </span>
                </div>
        

                <form className='form'>
                    <div>
                        <input className='form-input' id='firstname' value={form.firstName} onChange={(event)=>inputFirstName(event)}/>
                        <label className='form-label' htmlFor='firstname'>Фамилия</label>
                        
                    </div>
                    <div className='error-text'>{validForm.firstName ?null :  <span>Имя должно содержать более 2х букв</span>}</div>
                    <div>
                        <input className='form-input' id='secondname' value={form.secondName} onChange={(event)=>inputSecondName(event)}/>
                        <label className='form-label' htmlFor='secondname'>Имя</label>
                    </div>
                    <div className='error-text'>{validForm.secondName ?null :  <span>Фамилия должно содержать более 2х букв</span>}</div>
                    <div>
                        <input className='form-input' id='passportnumber' value={form.passport} onChange={(event)=>inputPassport(event)}/>
                        <label className='form-label' htmlFor='passportnumber'>Номер Паспорта</label>
                    </div>
                    <div className='error-text'>{validForm.passport ?null :  <span>Номер должен быть длинее 3-х символов</span>}</div>
                    <div>
                        <input className='form-input' id='phone' value={form.phone} onChange={(event)=>inputPhone(event)}/>
                        <label className='form-label' htmlFor='phone'>Номер телефона</label>
                    </div>
                    <div className='error-text'>{validForm.phone ?null :  <span> +380 -xx-xx-xx-xxx</span>}</div>
                    <div>
                        <input className='form-input' id='email' value={form.eMail} onChange={(event)=>inputEmail(event)}/>
                        <label className='form-label' htmlFor='email'>email</label>
                    </div>
                    <div className='error-text'>{validForm.eMail ?null :  <span> example@mail.ua</span>}</div>
                </form>

               <div className='form-button-box' >
                    <button className='form-button' type="button" onClick={()=>sendForm()}>
                        Отправить данные
                    </button>
                    <button className='form-button' type="button" onClick={()=>setModal()}>
                        Закрыть
                    </button>
               </div>


                </Modal>
                <Modal show={success} setModal={openSuccess}>
                    <div className='success'>
                        <span className='success-text'>
                        success
                        </span>
                    </div>
                    <button type='button' onClick={()=>openSuccess()}>
                        Ura
                    </button>

                </Modal>
           </div>
        </div>
    )
})