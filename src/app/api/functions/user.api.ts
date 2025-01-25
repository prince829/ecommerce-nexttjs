import { ISignupBody } from "@/app/types/Auth.types"
import axiosInstance from "../axiosInstance/Index"
import { endPoints } from "../endPoints"

export const signupMutation=async (body: ISignupBody)=>{
    console.log(endPoints.auth.userSignup,'pathhhhhhhhhhhhhhhhhh');
    
    const res=await axiosInstance.post<any>(endPoints.auth.userSignup,body);
    return res.data;
}