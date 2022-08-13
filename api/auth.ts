import axiosClient from "./axiosClient";

const SIGN_IN = "/auth/realms/hocmai/protocol/openid-connect/token";
const SIGN_UP = "/";

export const signInRequest = async (payload: any): Promise<any> => {
  const response = await axiosClient.post(SIGN_IN, payload);
  return response;
};
