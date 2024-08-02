import './styles/BookingPage.css'
import BookingForm from './BookingForm';
import { fetchAPI,submitAPI } from '../API';
import React, { useState,useReducer } from "react";
import { useNavigate } from "react-router-dom";

function BookingPage(){
    const date = new Date();
    const day = (date.getDate()>=10)?date.getDate():`0${date.getDate()}`
    const month = (date.getMonth()+1>=10)?date.getMonth()+1:`0${date.getMonth()+1}`
    const year = date.getFullYear();
    const currentDate = `${year}-${month}-${day}`;

    const[inputValues,setInputValues]=useState({
        date:currentDate,
        time:'17:00',
        guestsNum:1,
        occassion:'Birthday'
    });

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    function updateTimes( state,action){ 
        console.log(fetchAPI(action.value))
        if (action.type === 'date-changed') {
            return (
                {...state,times:fetchAPI(action.value)}
            );
          }   
        throw Error('Unknown action.');
    }

    function initializeTimes(){
        return({times:fetchAPI(date)});
    }

    function submitForm(){
        submitAPI(inputValues);
        if(submitAPI(inputValues)){
            navigate('/confirmation')
        }
    }

    return(
            <section id='booking'>
                <h1>Reserving Table</h1>
                
                <BookingForm 
                   inputValues={inputValues}
                   setInputValues={setInputValues}
                   currentDate={currentDate}
                   availableTimes={availableTimes}
                   dispatch={dispatch}
                   submitForm={submitForm}
                />
            </section>
    )
}

export default BookingPage;