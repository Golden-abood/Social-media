import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", () => {
  let baseUrl = "https://tarmeezacademy.com/api/v1";
  let userName = ref<string>("abood");
  let password = ref<string>("123456");
  let name = ref<string>("aboood");
  const login = async () => {
    try {
      let res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({
          username: userName.value,
          password: password.value,
        }),
      });

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
      method: "POST",
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
  };
});
