import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import BookingForm from './components/BookingForm';
import { fetchAPI } from "./API";


test('Renders the BookingForm heading', () => {

    render(<BookingForm 
      inputValues={({date:'2024-07-17',
      time:'17:00',
      guestsNum:1,
      occassion:'Birthday'})}
      availableTimes={({times:["17:00","18:00","19:00","20:00","21:00","22:00"]})}
      />);
    const buttonText = screen.getByText("Make Your reservation");
    expect(buttonText).toBeInTheDocument();
})

test('Test initializeTimes function',()=>{
  
   const initializeTimesMock = jest.fn();
   initializeTimesMock.mockImplementation(()=>({times:fetchAPI(new Date())}));
   expect (initializeTimesMock().length).not.toEqual(0)
})

test('Test updateTimes function',()=>{
  const setInputValues=jest.fn();
  const dispatch =jest.fn();
  render(<BookingForm
    inputValues={({date:'2024-07-17',
      time:'17:00',
      guestsNum:1,
      occassion:'Birthday'})}
      setInputValues={setInputValues}
      availableTimes={({times:["17:00","18:00","19:00","20:00","21:00","22:00"]})}
      dispatch={dispatch}
  />);
  const selectInput = screen.getAllByRole('combobox');
  const dateInput= screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-08-01'}});
  //options = ['17:00','17:30','18:00','20:00','21:00','23:30']
  expect(selectInput[0].options[0].text).toEqual('17:00');
  expect(selectInput[0].options[3].text).toEqual('20:00');
})