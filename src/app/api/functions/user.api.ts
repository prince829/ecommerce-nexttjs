import { ISignupBody } from "@/app/types/Auth.types"
import axiosInstance from "../axiosInstance/Index"
import { endPoints } from "../endPoints"

export const signupMutation=async (body: ISignupBody)=>{
    console.log(endPoints.auth.userSignup,'pathhhhhhhhhhhhhhhhhh');
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res=await axiosInstance.post<any>(endPoints.auth.userSignup,body);
    return res.data;
}