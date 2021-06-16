import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("render mk as a test", () => {
  render(<Greeting />);

  screen.getByText("MK");
});
