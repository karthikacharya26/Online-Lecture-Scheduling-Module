import axios from "axios";

// Login Action
export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:4000/api/auth/login", { email, password });
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    localStorage.setItem("user", JSON.stringify(data));

    // Redirect user after successful login
    navigate(data.role === "admin" ? "/admin" : "/instructor");
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: "Invalid email or password" });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};
