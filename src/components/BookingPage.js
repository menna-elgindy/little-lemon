import './styles/BookingPage.css'
import BookingForm from './BookingForm';
import React, { useState,useReducer } from "react";
function BookingPage(){
    const[inputValues,setInputValues]=useState({
        date:'2024-07-17',
        time:'17:00',
        guestsNum:1,
        occassion:'Birthday'
    });

    function updateTimes( state,action){
       
        if (action.type === 'date-changed') {
            return (
                {...state,times:['1:00','2:00','3:00','4:00','5:00','6:00']}
            );
          }   
        throw Error('Unknown action.');
    }

    function initializeTimes(){
        return({times:["17:00","18:00","19:00","20:00","21:00","22:00"]});
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return(
            <section id='booking'>
                <h1>Reserving Table</h1>
                
                <BookingForm 
                   inputValues={inputValues}
                   setInputValues={setInputValues}
                   availableTimes={availableTimes}
                   dispatch={dispatch}
                />
            </section>
    )
}

export default BookingPage;