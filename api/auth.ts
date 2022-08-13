import qs from "qs";
import axiosClient from "./axiosClient";

const SIGN_IN = "/auth/realms/hocmai/protocol/openid-connect/token";
const FIRST_SIGN_IN = "/";
const SIGN_UP = "/";
const CHANGE_PASSWORD = "/";

export const signInRequest = async (payload: any): Promise<any> => {
  var data = qs.stringify(payload);
  return axiosClient
    .post(SIGN_IN, data)
    .then((res) => res)
    .catch((err) => err);
};
export const firstSignInRequest = async (payload: any): Promise<any> => {
  var data = qs.stringify(payload);
  return axiosClient
    .post(FIRST_SIGN_IN, data)
    .then((res) => res)
    .catch((err) => err);
};
export const signUpRequest = async (payload: any): Promise<any> => {
  var data = qs.stringify(payload);
  return axiosClient
    .post(SIGN_UP, data)
    .then((res) => res)
    .catch((err) => err);
};
export const changePasswordRequest = async (payload: any): Promise<any> => {
  var data = qs.stringify(payload);
  return axiosClient
    .post(CHANGE_PASSWORD, data)
    .then((res) => res)
    .catch((err) => err);
};
