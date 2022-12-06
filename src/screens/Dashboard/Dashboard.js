import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Alert, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./Dashboard.css";
import MyBox from "../../components/UI/MyBox";
import Navbar from "../../components/layout/Navbar";
import Articles from "../../components/articles/Articles";
import { getAllArticles } from "../../store/actions/GetArticlesAction";


const Dashboard = () => {
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    articles,
    filterArticles,
    searchInput,
    error,
    loading,
    articleStatus,
    checkedEmpty,
  } = useSelector((state) => state.article);

  const [articlesToDispaly, showMessage, showIcon, showSeverity, showColor] =
    searchInput
      ? [
          filterArticles,
          "No articles contain these characters entered",
          <SearchOffIcon fontSize="inherit" />,
          "info",
          "rgba(192, 210, 248, 0.747)",
        ]
      : [
          articles,
          "No articles to show",
          <CloseIcon fontSize="inherit" />,
          "warning",
          "rgba(240, 212, 171, 0.747)",
        ];

  const scrollToEnd = () => {
    setPage(page + 1);
    dispatch(getAllArticles(page, checkedEmpty, searchInput));
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      checkedEmpty.length !== 0 &&
      !searchInput
    ) {
      scrollToEnd();
    }
  };

  useEffect(() => {
    dispatch(getAllArticles(page));
  }, [dispatch, page]);

  if (!localStorage.getItem("token")) {
    history.replace("/");
  }

  return (
    <Fragment>
      <Navbar text="Articles" articles={articles} />
      <main>
        <Articles
          articles={articlesToDispaly}
          loading={loading}
          error={error}
          status={articleStatus}
        />
        {articlesToDispaly.length === 0 && articleStatus === "success" && (
          <div>
            <MyBox myshadowcolor={showColor}>
              <Alert
                icon={showIcon}
                sx={{
                  mt: 4,
                  margin: "5px",
                  borderRadius: 3,
                  fontFamily: "Segoe Print",
                }}
                severity={showSeverity}
              >
                {showMessage}
              </Alert>
            </MyBox>
          </div>
        )}
        {error && articleStatus === "failed" && (
          <div>
            <MyBox myshadowcolor="rgba(218, 62, 62, 0.747)">
              <Alert
                icon={<HighlightOffIcon fontSize="inherit" />}
                sx={{
                  mt: 4,
                  margin: "5px",
                  borderRadius: 3,
                  fontFamily: "Segoe Print",
                }}
                severity="error"
              >
                {error}, try again...
              </Alert>
              <Button
                startIcon={<ReplayIcon />}
                variant="outlined"
                color="error"
                sx={{
                  mt: 4,
                  marginTop: 1,
                  borderRadius: 10,
                  fontSize: 10,
                  fontFamily: "Segoe Print",
                }}
                onClick={() => dispatch(getAllArticles(page))}
                margin="normal"
              >
                refresh
              </Button>
            </MyBox>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default Dashboard;
