import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", () => {
  let baseUrl = "https://tarmeezacademy.com/api/v1";
  let userName = ref("abood");
  let password = ref("123456");
  let name = ref("aboood");
  let csrfToken = "";
  const login = async () => {
    try {
      let res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken, // Include the CSRF token in the headers
        },
        body: JSON.stringify({
          username: userName.value,
          password: password.value,
        }),
      });
      csrfToken = res.headers.get("X-CSRF-Token") || "";

      let data = await res.json();
      let user = data.user;
      let token = data.token;

      console.log(data.message, user, token);
    } catch (err) {
      console.log(err);
    }
  };
  const register = async () => {
    const res = await fetch(`${baseUrl}/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "<calculated when request is sent>",
        Host: "<calculated when request is sent>",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Accept: "application/json",
      },
      body: {
        username: userName.value,
        password: password.value,
        name: name.value,
      },
    });
    const data = await res.json();
    let user = data.user;
    let token = data.token;

    console.log(data.message, user, token);
  };

  return {
    login,
    register,
    userName,
    password,
    name,
    csrfToken,
  };
});
