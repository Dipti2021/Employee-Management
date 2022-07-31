import { render, screen } from "@testing-library/react";

import AdminLogin from "../../client/components/admin/AdminLogin";

const username = "admin";
const password = "admin";

test("Admin Login", async () => {
  const { getByText } = render(<AdminLogin />);
  const usernameInput = screen.getByLabelText("Username");
  const passwordInput = screen.getByLabelText("Password");
  const submitButton = screen.getByText("Submit");
  const errorMessage = screen.getByText("Error logging in admin");

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(errorMessage).not.toBeInTheDocument();

  usernameInput.value = username;
  passwordInput.value = password;
  submitButton.click();

  expect(usernameInput.value).toBe(username);
  expect(passwordInput.value).toBe(password);
  expect(errorMessage).toBeInTheDocument();
});
