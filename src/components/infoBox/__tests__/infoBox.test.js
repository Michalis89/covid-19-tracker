import { render, screen } from "@testing-library/react";
import InfoxBox from "../InfoxBox";

test("shoudl render infoxBox component", () => {
  render(<InfoxBox />);
  const infoBoxElement = screen.getByTestId("infoBoxCard");

  expect(infoBoxElement).toBeInTheDocument();
});
