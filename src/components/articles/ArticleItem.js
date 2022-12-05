import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Link,
} from "@mui/material";

import "./ArticleItem.css";

const ArticleItem = (props) => {
  return (
    <Grid item xs={6} md={4}>
      <Card
        boxshadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "5px 10px 20px rgba(205, 6, 255, 0.747)",
          },
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ mb: 1.5, fontFamily: "Segoe Print" }}
              color="navy"
              gutterBottom
            >
              {props.title}
            </Typography>
            {/* <Typography
              variant="body2"
              sx={{ fontSize: 13, mb: 1.5 }}
              color="initial"
              
            >
            </Typography> */}
            <Typography
              variant="subtitle2"
              sx={{ mb: 1.5, fontFamily: "Segoe Print" }}
              color="palevioletred"
            >
              description
            </Typography>
            {/* <Typography variant="body2" sx={{ fontFamily: "Calibri" }}>
              <div className="scrollD">{props.description}</div>
            </Typography> */}
            <Typography
              variant="body1"
              component="div"
              sx={{ fontFamily: "Calibri", overflow: "auto" }}
            ><div className="scrollD">{props.description}</div>
              {/* {props.description} */}
            </Typography>
          </CardContent>
          <Typography
            color="darksalmon"
            sx={{ fontSize: 10, mb: 1.5, fontFamily: "Segoe Print" }}
          >
            {props.source}
          </Typography>
          <CardActions>
            <Link
              href={props.link}
              size="meduim"
              sx={{ fontFamily: "Segoe Print" }}
            >
              read...
            </Link>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ArticleItem;
