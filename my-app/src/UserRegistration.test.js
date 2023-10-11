import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserRegistration from "./components/UserRegistration";

describe("UserRegistration", () => {
  test("should render the registration form", () => {
    render(<UserRegistration />);

    expect(screen.getByText("Registration Form")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("should validate required fields", () => {
    render(<UserRegistration />);
    const registerButton = screen.getByText("Register");

    fireEvent.click(registerButton);

    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("should submit the registration", () => {
    render(<UserRegistration />);
    const username = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");
    const eMail = screen.getByPlaceholderText("Email");
    const registerButton = screen.getByText("Register");

    fireEvent.change(username, { target: { value: "Ole" } });
    fireEvent.change(password, { target: { value: "hackMeIfYouCan!" } });
    fireEvent.change(eMail, { target: { value: "ole@gmail.com" } });

    fireEvent.click(registerButton);

    expect(document.getElementById("submit")).toHaveTextContent("SUBMITTED");
  });
});
