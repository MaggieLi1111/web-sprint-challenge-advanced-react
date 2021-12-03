import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("sanity check renders without errors", () => {
    render(<CheckoutForm />)
});

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/checkout form/i)
})

test("shows success message on submit with form details",   async () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name/i);
    userEvent.type(firstName, "Anthony")

    const lastName = screen.getByLabelText(/last name/i);
    userEvent.type(lastName, "LeRois")

    const address = screen.getByLabelText(/address/i)
    userEvent.type(address, "123 ABC Dr.")

    const city = screen.getByLabelText(/city/i)
    userEvent.type(city, "Pittsburgh")

    const state = screen.getByLabelText(/state/i)
    userEvent.type(state, "PA")

    const zip = screen.getByLabelText(/zip/i)
    userEvent.type(zip, "15123")

    const button = screen.getByRole("button")
    userEvent.click(button)

    const successMessage = await screen.getByTestId("successMessage")
    expect(successMessage).toBeInTheDocument();


});
