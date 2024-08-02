import './styles/BookingForm.css'

function BookingForm({inputValues,setInputValues,availableTimes,dispatch,submitForm}){

    function handleSubmit(e){
        e.preventDefault();
        submitForm();
    }

    function handleChangeDate(e){
        e.preventDefault()
        setInputValues({...inputValues, date:e.target.value})
       dispatch({type:'date-changed',value:new Date(e.target.value)})
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={inputValues.date} onChange={handleChangeDate}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={inputValues.time} onChange={(e)=>setInputValues({...inputValues, time:e.target.value})}>
                <option>{availableTimes.times[0]}</option>
                <option>{availableTimes.times[1]}</option>
                <option>{availableTimes.times[2]}</option>
                <option>{availableTimes.times[3]}</option>
                <option>{availableTimes.times[4]}</option>
                <option>{availableTimes.times[5]}</option>
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
    );
}

export default BookingForm;