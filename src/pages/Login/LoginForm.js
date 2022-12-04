import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  LinearProgress,
  Alert,
} from "@mui/material";
import MyBox from "../../components/MyBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hook/useHttp";
import { postUserInput } from "../../api/httpReq";
import { loginActions } from "../../store/slices/login-slice";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";

const validationShema = yup.object({
  username: yup.string().required("user name is required"),
  password: yup.string().required("password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.login);
  const {
    sendRequest: postRequest,
    error,
    loading,
    data: token,
  } = useHttp(postUserInput, false);

  const ShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("../dashboard", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      await postRequest(values);
      if (token) {
        dispatch(loginActions.logIn(token));
      }
      actions.resetForm();
    },
    validationSchema: validationShema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <MyBox>
          <Typography
            variant="h2"
            padding={3}
            textAlign="center"
            sx={{ fontFamily: "Segoe Print" }}
          >
            Login
          </Typography>
          <TextField
            id="username"
            variant="outlined"
            name="username"
            label="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            margin="normal"
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            onBlur={formik.handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            name="password"
            label="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            margin="normal"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={ShowPasswordHandler}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            endIcon={<LoginTwoToneIcon />}
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mt: 4, marginTop: 1, borderRadius: 3 }}
            disabled={
              !formik.values.username || !formik.values.password || loading
            }
            margin="normal"
          >
            Login
          </Button>
          {error && (
            <Alert sx={{ mt: 4, marginTop: 3, borderRadius: 3 }}  severity="error">
              {error}
            </Alert>
          )}
        </MyBox>
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
      </form>
    </div>
  );
};

export default LoginForm;
