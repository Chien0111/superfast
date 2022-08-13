import axios, { AxiosResponse } from "axios";
import qs from "qs";

const API_CLIENT_URL = process.env.API_CLIENT_URL;
const axiosClient = axios.create({
  baseURL: API_CLIENT_URL,
  headers: {
    Accept: "application/json, text/*, */*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // timeout: 5000,
});

const requestHandler = async (request: any) => {
  let AUTH_TOKEN = localStorage.getItem("token");
  if (AUTH_TOKEN) {
    try {
      // const expired: any = decodeJWT<string>(AUTH_TOKEN);
      // var date = new Date();
      // var now = date.getTime() / 1000;
      // console.log(expired.iat && now < expired.exp);
      // if (expired.iat && now < expired.exp) {
      request.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
      return request;
      // } else {
      //   alert('Phiên đăng nhập hết hạn vui lòng đăng nhập lại');
      //   localStorage.removeItem('token');
      //   window.location.href = '/';
      // }
    } catch (error) {
      alert("Phiên đăng nhập hết hạn vui lòng đăng nhập lại");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  } else {
    return request;
  }
};

const responseHandler = (response: AxiosResponse) => {
  return response.data;
};

const errorHandler = (error: any) => {
  // Promise.reject(error.data).catch((err) => {
  //   if (err.code === 'invalid_token') {
  //     alert('Phiên đăng nhập hết hạn vui lòng đăng nhập lại');
  //     localStorage.removeItem('token');
  //     window.location.href = '/';
  //   }
  // });
  return Promise.reject(error.response.data);
};
axiosClient.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};
axiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

// export const paramsSerializer = (params) => {
//   return qs.stringify(params, { arrayFormat: 'repeat', encode: false });
// };

export const queryStringify = (params: any) => {
  return qs.stringify(params, {
    arrayFormat: "indices",
    encode: false,
    addQueryPrefix: true,
  });
};

export default axiosClient;
