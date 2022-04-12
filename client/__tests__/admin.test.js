import { render, screen } from "@testing-library/react";

import AdminLogin from "../../client/components/admin/AdminLogin";

const username = "admin";
const password = "admin";

const initialState = {
  admin: {
    username: "",
    password: "",
    isAuthenticated: false,
    error: "",
  },
};
test("Admin Login renders", () => {
  render(<AdminLogin />);
  expect(screen.getByText("Admin Login")).toBeInTheDocument();
});
