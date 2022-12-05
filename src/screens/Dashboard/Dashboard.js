import { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import useHttp from "../../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../api/httpReq";
import Articles from "../../components/articles/Articles";
import { articleActions } from "../../store/slices/article-slice";
import { LinearProgress } from "@mui/material";
import "./Dashboard.css";

const Dashboard = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const scrollToEnd = () => {
    setPage(page+1);
    const t= getRequest(page);
    console.log(t)
  }
  window.onscroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      scrollToEnd();
    }
  }
  const { articles, filterArticles, searchInput } = useSelector(
    (state) => state.article
  );
  const articlesToDispaly = searchInput ? filterArticles : articles;
  // const articleEmpty

  const {
    sendRequest: getRequest,
    error,
    loading,
    data,
  } = useHttp(getArticles, true);

  dispatch(articleActions.allArticles(data));

  useEffect(() => {
      getRequest(page);
  }, [getRequest, page]);

  return (
    <Fragment>
      <Navbar text="Articles" />
      <main>
        <Articles items={articlesToDispaly} />
      </main>
      {loading && (
        <div>
          <LinearProgress
            sx={{ mt: 4, marginTop: 3, borderRadius: 3 }}
            color="secondary"
          />
          <LinearProgress
            sx={{ mt: 4, marginTop: 3, borderRadius: 3 }}
            color="primary"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
