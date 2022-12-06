import axios from "axios";
import { loginActions } from "../slices/login-slice"

export const PostLoginAction = (userlogin) => {
    return async (dispatch) => {
        dispatch(loginActions.logInReq());
        await axios.post("http://34.245.213.76:3000/auth/signin",{
            username: userlogin.username,
            password: userlogin.password,
            headers: {
                "Content-Type":"application/json",
            }
        })
        .then((res)=>{
            const token = res.data.accessToken;
            localStorage.setItem("token", token);
            dispatch(loginActions.logInSuccess(token));
        })
        .catch((err)=>{
            dispatch(loginActions.logInFailed("Please check your login credentials"));
        })
    }
}