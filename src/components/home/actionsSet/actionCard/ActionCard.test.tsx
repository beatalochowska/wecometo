import React from "react";
import { cleanup, render } from "@testing-library/react";
import HomePage from "../../HomePage";

afterEach(cleanup);

it("Should render action card", () => {
  const { getByText } = render(<HomePage />);
  getByText("ActionCard");
});
