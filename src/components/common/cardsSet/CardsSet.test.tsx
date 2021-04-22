import React from "react";
import { cleanup, render } from "@testing-library/react";
import HomePage from "../../home/HomePage";

afterEach(cleanup);

it("Should render actions set", () => {
  const { getByText } = render(<HomePage />);
  getByText("ActionCard");
});
