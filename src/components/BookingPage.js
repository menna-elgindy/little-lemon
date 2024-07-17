import './styles/BookingPage.css'
import React, { useState } from "react";
function BookingPage(){
    const[inputValues,setInputValues]=useState({
        date:'',
        time:'17:00',
        guestsNum:1,
        occassion:'Birthday'
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputValues);
        setInputValues({
            date:'',
            time:'17:00',
            guestsNum:1,
            occassion:'Birthday'
        })
    }
    return(
            <section id='booking-form'>
                <h1>Reserving Table</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={inputValues.date} onChange={(e)=>setInputValues({...inputValues, date:e.target.value})}/>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={inputValues.time} onChange={(e)=>setInputValues({...inputValues, time:e.target.value})}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={inputValues.guestsNum} onChange={(e)=>setInputValues({...inputValues, guestsNum:e.target.value})}/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={inputValues.occassion} onChange={(e)=>setInputValues({...inputValues, occassion:e.target.value})}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input type="submit" value="Make Your reservation" id="submit-btn"/>
                    </form>
            </section>
    )
}

export default BookingPage;