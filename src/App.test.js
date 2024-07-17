import { render, screen } from "@testing-library/react";
import React from "react";
import BookingForm from './components/BookingForm';


test('Renders the BookingForm heading', () => {

    render(<BookingForm 
      inputValues={({date:'2024-07-17',
      time:'17:00',
      guestsNum:1,
      occassion:'Birthday'})}
      availableTimes={({times:["17:00","18:00","19:00","20:00","21:00","22:00"]})}
      />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})