import { render, screen } from "@testing-library/react";
import Login from "./components/Login";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("render password", () => {
  const component = render(<Login />);
  console.log(component);
});
test("render value is email", () => {
  const component = render(<Login />);
  console.log(component);
});
