import React from "react";
import { cleanup, render } from "@testing-library/react";
import HomePage from "./HomePage";

afterEach(cleanup);

it("Should render Welcome to my street", () => {
  const { getByText } = render(<HomePage />);
  getByText("Welcome to my street");
});

it("Should render numbers set", () => {
  const { getByText } = render(<HomePage />);
  getByText("NumberCard");
});

it("Should render actions set", () => {
  const { getByText } = render(<HomePage />);
  getByText("ActionCard");
});
