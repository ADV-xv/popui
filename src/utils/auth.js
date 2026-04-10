export const signupUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const loginUser = (email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    return true;
  }
  return false;
};

export const isLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};