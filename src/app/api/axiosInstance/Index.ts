import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrlApi } from "../endPoints";
import { BaseApiResponse } from "@/app/types/Common.types";
import { globalCatchError, globalCatchSucess, globalCatchWarning } from "@/app/lib/functions/helper";
import { getCookieClient } from "@/app/lib/functions/storage.lib";
import { destroyCookie } from "nookies";

const axiosInstance=axios.create({
    baseURL:baseUrlApi
});
axiosInstance.interceptors.request.use((config) => {
    const token = getCookieClient(process.env.NEXT_APP_TOKEN_NAME || "");
    if (token && !!config.headers) {
      config.headers["token"] = `${token}`;
    }
    return config;
  });
axiosInstance.interceptors.response.use(
    (res:AxiosResponse)=>{
            if (res?.data?.status !== 200) {
              globalCatchWarning(res);
            } else {
              globalCatchSucess(res);
            }
          return res;

},
async (error: AxiosError<BaseApiResponse>) => {
    globalCatchError(error);

    // Token Expired
    if (error?.response?.status === 401) {
      destroyCookie(null, process.env.NEXT_APP_TOKEN_NAME!, { path: "/" });
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    }

    return Promise.reject(error);
  }
)
export default axiosInstance