import React from "react";

import { Grid } from "@mui/material";
import { LinearProgress } from "@mui/material";

import "./Articles.css";
import ArticleItem from "./ArticleItem";


const Articles = (props) => {
  return (
    <div>
      <Grid container spacing={3}>
        {props.articles &&
          props.articles.map((article, i) => (
            <ArticleItem
              key={i}
              title={article.headline.main}
              description={article.abstract}
              source={article.source}
              link={article.web_url}
            />
          ))}
      </Grid>
      <Grid item>
        {props.loading && (
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
      </Grid>
    </div>
  );
};

export default Articles;
