import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";

jest.mock("@emailjs/browser", () => ({ sendForm: jest.fn() }));

test("retains the draft on failure and includes the sender once on retry", async () => {
  const sent = [];
  emailjs.sendForm.mockImplementation(async (_service, _template, form) => {
    sent.push(new FormData(form).get("message"));
    if (sent.length === 1) throw Error("offline");
  });
  render(<Contact />);
  for (const [label, value] of [
    ["Your name", "Asha"],
    ["Email address", "asha@example.org"],
    ["Subject", "Teams"],
    ["Message", "Can we enter?"],
  ]) {
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  }
  fireEvent.click(screen.getByRole("button"));
  await screen.findByText(/could not be sent/);
  expect(screen.getByLabelText("Message").value).toBe("Can we enter?");
  fireEvent.click(screen.getByRole("button"));
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe(
      "Your message has been sent.",
    ),
  );
  expect(sent).toEqual(
    Array(2).fill(
      "From: Asha <asha@example.org>\nSubject: Teams\n\nCan we enter?",
    ),
  );
  expect(screen.getByLabelText("Message").value).toBe("");
});
