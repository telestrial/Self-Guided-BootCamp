import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders 'Hello World!' text.", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing here with this one.

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' text BEFORE button click.", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("It's good to see you!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders 'Changed!' text after button click.", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not render 'It's good to see you!' text AFTER button click.", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const paragraphElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
