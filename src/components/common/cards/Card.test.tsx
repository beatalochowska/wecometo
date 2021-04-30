import React from "react";
import { cleanup, render } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);

function renderCard(args: { title: string }) {
  const defaultProps = { title: "nothing" };
  const props = { ...defaultProps, ...args };

  return render(<Card {...props} />);
}

it("Should render action card", () => {
  const { getByText } = renderCard({ title: "ActionCard" });
  getByText("ActionCard");
});
