export const postUserInput = async (userlogin) => {
  const response = await fetch("http://34.245.213.76:3000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userlogin.username,
      password: userlogin.password,
    }),
  });
  console.log("=======",JSON.stringify(response.data));
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Please check your login credentials");
  }
  
  localStorage.setItem("token", data.accessToken);
  return data;
};

export const getArticles = async (page) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`http://34.245.213.76:3000/articles?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Not Found");
  }
  console.log("articles...",data) //checked
  console.log("articles docssss",data.response.docs) //checked fdata.res.docs
  // return transformedQuotes;
  return data.response.docs
};

// export async function getArticles(page) {
//   const token = localStorage.getItem("token");
//   const response = await fetch(
//     "http://34.245.213.76:3000/articles?page="+page,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quotes.");
//   }

//   const transformedQuotes = [];
//   console.log("news",data.response)

//   for (const key in data.response.docs) {
//     const quoteObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedQuotes.push(quoteObj);
//   }

//   return transformedQuotes;
// }
