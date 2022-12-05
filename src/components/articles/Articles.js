import { Grid } from "@mui/material";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";
import './Articles.css'

const Articles = (props) => {
//   const { articles, filterArticles, searchInput } = useSelector(
//     (state) => state.article
//   );

//   const articlesToDispaly = searchInput ? filterArticles : articles;

  return (
    <div>
      <Grid container spacing={3}>
        {props.items && props.items.map((article) => (
          <ArticleItem
            key={article._id}
            title={article.headline.main}
            description={article.abstract}
            source={article.source}
            link={article.web_url}
          />
        ))}
        {/* <ArticleItem
          title="
              Response to the accusations against Blagojevich was swift, harsh
              and widespread. It is time, many seemed to be saying, for the
              governor to go."
          description="The Bush Administration, which was surprised by the Iraqi
          invasion of Kuwait, now faces two daunting tasks - to force an
          Iraqi withdrawal and a restoration of Kuwaiti sovereignty, and
          to move the United States substantially toward independence from
          Middle Eastern oil"
          source="source: The New York Times"
          link="https://worldcup.blogs.nytimes.com/2006/06/27/astoria-reacts-2/"
        /> */}
      </Grid>
    </div>
  );
};

export default Articles;
