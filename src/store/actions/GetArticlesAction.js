import axios from "axios";
import { articleActions } from "../slices/article-slice";

export const getAllArticles = (page) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(articleActions.articlesReq());
    await axios.get("http://34.245.213.76:3000/articles", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            page: page,
        }
    })
    .then((res)=>{
        dispatch(articleActions.allArticlesSuccess(res.data.response.docs));
    })
    .catch((err)=>{
        dispatch(articleActions.allArticlesFailed(err.message))
    })
  };
};
