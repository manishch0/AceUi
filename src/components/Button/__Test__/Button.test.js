import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Button from "../Button";

test("normal button", async () => {
  const { container } = render(<Button>Hello button</Button>);

  const buttonElement = container.querySelector("#button-id");
  expect(buttonElement).toBeInTheDocument();
});

test("button with loader", async () => {
  const { container } = render(<Button isLoading={true}>Hello button</Button>);

  const buttonElement = container.querySelector("#button-id");
  const loader = container.querySelector("#button-loader");
  expect(buttonElement).toBeInTheDocument();
  expect(loader).toBeInTheDocument();
});

test("button check click event", async () => {
  const { container } = render(<Button isLoading={true}>Hello button</Button>);

  const buttonElement = container.querySelector("#button-id");
  await userEvent.click(buttonElement);
});
