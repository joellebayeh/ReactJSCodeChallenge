// import axios from "axios";

export const postUserInput = async (userlogin) => {
  const response = await fetch("http://34.245.213.76:3000/auth/signin", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userlogin.username,
      password: userlogin.password,
    }),
  });
  // const response = await axios.post("http://34.245.213.76:3000/auth/signin", {
  //   username: userlogin.username,
  //   password: userlogin.password,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // console.log({...response});
  // console.log(response.statusText);

  if (!response.ok) {
    throw new Error("Please check your login credentials");
  }

  const data = await response.json();
  //localStorage.setItem("token", data.accessToken);

  return data;
};
