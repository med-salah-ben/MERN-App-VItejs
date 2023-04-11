import axios from "axios";
import {
  USER_REGISTER,
  GET_AUTH_USER,
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  AUTH_EERORS,
} from "../Constant/auth-types";
import {toast} from "react-toastify"

export const userLoading = () => (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_EERORS });
  }
};

export const userLogout = () => (dispatch) => {
    try {
      dispatch({ type: USER_LOGOUT });
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_EERORS });
    }
  };

//register
export const registerUser = (formData) => async (dispatch) => {
    dispatch(userLoading())
  try {
    const res = await axios.post("/api/auth/register", formData);
    toast.success(res.data.msg, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    dispatch({
      type: USER_REGISTER,
      payload: res.data, // {msg , user , token}
    });
  } catch (error) {
    console.log(error);
    const {errors} = error.response.data
    if(Array.isArray(errors)){
      errors.forEach((err)=>toast.error(err.msg))
    }
    const {msg} = error.response.data

    if(msg){
       toast.error(msg)
    }
    dispatch({
      type: AUTH_EERORS,
    });
  }
};

//login
export const loginUser = (formData) => async (dispatch) => {
    dispatch(userLoading())
  try {
    const res = await axios.post("/api/auth/login", formData);
    toast.success(res.data.msg, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    dispatch({
      type: USER_LOGIN,
      payload: res.data, // {msg , user , token}
    });
  } catch (error) {
    console.log(error);
    const {errors , msg} = error.response.data
    console.log(errors)
    if(Array.isArray(errors)){
      errors.forEach((err)=>toast.error(err.msg))
    }
    if(msg){
       return toast.error(msg)
    }
    dispatch({
      type: AUTH_EERORS,
    });
  }
};

//get auth user
export const getAuthUser = () => async (dispatch) => {
    dispatch(userLoading())
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    const result = await axios.get("/api/auth/user", config);
    console.log(result.data);
    dispatch({ type: GET_AUTH_USER, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_EERORS });
  }
};
