import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik } from "formik";
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import MyBox from "../../components/UI/MyBox";
import { PostLoginAction } from "../../store/actions/PostLoginAction";



const validationShema = yup.object({
  username: yup.string().required("user name is required"),
  password: yup.string().required("password is required"),
});

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn, error, loading } = useSelector((state) => state.login);

  const ShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (userlogin) => {
    dispatch(PostLoginAction(userlogin));
  };

  useEffect(() => {
    if (isLoggedIn === "success") {
      history.replace("/dashboard");
    }
  }, [isLoggedIn, history]);

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationShema}
        onSubmit={(fields, actions) => {
          submitHandler(fields);
          actions.resetForm();
        }}
      >
        {({
          errors,
          status,
          touched,
          values,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <MyBox myshadowcolor="rgba(0, 132, 255, 0.788)">
              <Typography
                color="CaptionText"
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
                onChange={handleChange}
                value={values.username}
                margin="normal"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                onBlur={handleBlur}
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
                onChange={handleChange}
                value={values.password}
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onBlur={handleBlur}
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
                disabled={!values.username || !values.password || loading}
                margin="normal"
              >
                Login
              </Button>

              {error && (
                <Alert
                  sx={{ mt: 4, marginTop: 3, borderRadius: 3 }}
                  severity="error"
                >
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
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
