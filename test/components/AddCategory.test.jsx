import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewValue={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "naruto" } });

    expect(input.value).toBe("naruto");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "naruto";

    const onNewValue = jest.fn();

    render(<AddCategory onNewValue={onNewValue} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewValue).toHaveBeenCalled();
    expect(onNewValue).toHaveBeenCalledTimes(1);
    expect(onNewValue).toBeCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory si el input está vacio ", () => {
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={onNewValue} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewValue).toHaveBeenCalledTimes(0);
  });
});
