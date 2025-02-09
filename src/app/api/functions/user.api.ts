import { ISignupBody } from "@/app/types/Auth.types"
import axiosInstance from "../axiosInstance/Index"
import { endPoints } from "../endPoints"

export const signupMutation=async (body: ISignupBody)=>{;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res=await axiosInstance.post<any>(endPoints.auth.userSignup,body);
    return res.data;
}
export const signinMutation=async (body: ISignupBody)=>{;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res=await axiosInstance.post<any>(endPoints.auth.userSignin,body);
    return res.data;
}