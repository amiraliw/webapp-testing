import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator } from "./components/Calculator";

describe("Calculator", () => {
  it("should render the Calculator component", () => {
    render(<Calculator />);

    expect(screen.getByText("Calculator")).toBeInTheDocument();
    expect(screen.getByLabelText("First Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Second Number")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("x")).toBeInTheDocument();
    expect(screen.getByText(":")).toBeInTheDocument();
  });

  it("should perform addition correctly", () => {
    render(<Calculator />);

    const firstNumberInput = screen.getByLabelText("First Number");
    const secondNumberInput = screen.getByLabelText("Second Number");
    const addButton = screen.getByText("+");

    fireEvent.change(firstNumberInput, { target: { value: "2" } });
    fireEvent.change(secondNumberInput, { target: { value: "3" } });
    fireEvent.click(addButton);

    const result = screen.getByText("2 + 3 = 5");
    expect(result).toBeInTheDocument();
  });

  it("should perform addition correctly", () => {
    render(<Calculator />);

    const firstNumberInput = screen.getByLabelText("First Number");
    const secondNumberInput = screen.getByLabelText("Second Number");
    const addButton = screen.getByText("+");

    fireEvent.change(firstNumberInput, { target: { value: "2" } });
    fireEvent.change(secondNumberInput, { target: { value: "3" } });
    fireEvent.click(addButton);

    const result = screen.getByText("2 + 3 = 5");
    expect(result).toBeInTheDocument();
  });

  it("should perform subtraction correctly", () => {
    render(<Calculator />);

    const firstNumberInput = screen.getByLabelText("First Number");
    const secondNumberInput = screen.getByLabelText("Second Number");
    const minusButton = screen.getByText("-");

    fireEvent.change(firstNumberInput, { target: { value: "2" } });
    fireEvent.change(secondNumberInput, { target: { value: "3" } });
    fireEvent.click(minusButton);

    const result = screen.getByText("2 - 3 = -1");
    expect(result).toBeInTheDocument();
  });

  it("should perform multiplication  correctly", () => {
    render(<Calculator />);

    const firstNumberInput = screen.getByLabelText("First Number");
    const secondNumberInput = screen.getByLabelText("Second Number");
    const multiplyButton = screen.getByText("x");

    fireEvent.change(firstNumberInput, { target: { value: "2" } });
    fireEvent.change(secondNumberInput, { target: { value: "3" } });
    fireEvent.click(multiplyButton);

    const result = screen.getByText("2 x 3 = 6");
    expect(result).toBeInTheDocument();
  });

  it("should perform division  correctly", () => {
    render(<Calculator />);

    const firstNumberInput = screen.getByLabelText("First Number");
    const secondNumberInput = screen.getByLabelText("Second Number");
    const divideButton = screen.getByText(":");

    fireEvent.change(firstNumberInput, { target: { value: "6" } });
    fireEvent.change(secondNumberInput, { target: { value: "3" } });
    fireEvent.click(divideButton);

    const result = screen.getByText("6 : 3 = 2");
    expect(result).toBeInTheDocument();
  });

  it("should clear result when typing in input fields", () => {
    render(<Calculator />);

    const firstNumberInput = screen.getByLabelText("First Number");
    const secondNumberInput = screen.getByLabelText("Second Number");
    const addButton = screen.getByText("+");

    fireEvent.change(firstNumberInput, { target: { value: "2" } });
    fireEvent.click(addButton);
    expect(screen.getByText("2 + 0 = 2")).toBeInTheDocument();

    fireEvent.change(secondNumberInput, { target: { value: "3" } });
    expect(screen.queryByText("2 + 0 = 2")).toBeNull();
  });
});
