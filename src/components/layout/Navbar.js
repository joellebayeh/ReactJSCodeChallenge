import {
  AppBar,
  Typography,
  styled,
  Toolbar,
  InputBase,
  Button,
} from "@mui/material";
import "./Navbar.css";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/slices/login-slice";
import { useHistory } from "react-router-dom";
import { articleActions } from "../../store/slices/article-slice";
import SearchIcon from "@mui/icons-material/Search";

const StyledToolbar = styled(Toolbar)({
  diaplay: "flex",
  justifyContent: "space-between",
});

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "antiquewhite",
//   padding: "0 3px",
//   borderRadius: theme.shape.borderRadius,
//   width: "20%",
// }));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "antiquewhite",
  "&:hover": {
    backgroundColor: "honeydew",
  },
  marginRight: theme.spacing(7),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(loginActions.logOut());
    localStorage.removeItem("token");
    history.push("/");
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const searchInput = event.target.value.toLowerCase();
    dispatch(articleActions.searchArticles(searchInput));
  };

  const SubmitSearch = (event) => {
    event.preventDefault();
  };

  return (
    <AppBar color="transparent" position="sticky" variant="elevation">
      <StyledToolbar>
        <Typography
          variant="h3"
          sx={{
            display: {
              xs: "none",
              color: "rgb(75, 0, 85)",
              sm: "block",
              fontFamily: "Segoe Print",
            },
          }}
        >
          {props.text}
        </Typography>
        <ArticleIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={searchHandler}
            onSubmit={SubmitSearch}
          />
        </Search>
        <Button
          type="submit"
          sx={{ borderRadius: 3 }}
          endIcon={<LogoutIcon />}
          color="secondary"
          variant="contained"
          onClick={logoutHandler}
        >
          logout
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
