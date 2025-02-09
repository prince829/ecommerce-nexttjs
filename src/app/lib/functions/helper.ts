import { BaseApiResponse } from "@/app/types/Common.types";
import { AxiosError, AxiosResponse } from "axios";
import eventEmitter from "./event.emmiter";
import { toast } from "sonner";

/**
 * Check if the window object exists.
 * @returns A function that checks if the window is undefined.
 */
export function checkWindow() {
    return typeof window !== "undefined";
  }
  
  export function isInServer() {
    return typeof document === "undefined";
  }

export const globalCatchSucess = (response: AxiosResponse<BaseApiResponse>) => {
    let message = "Something went wrong";
    if (response?.data?.message) {
      message = response?.data.message;
    }
    eventEmitter.emit('showNotification', {
      message,
      variant: "success"
    });
    toast.success(message)
  };
  
  export const globalCatchWarning = (
    response: AxiosResponse<BaseApiResponse>
  ) => {
    let message = "Something went wrong";
    if (response?.data?.message) {
      message = response?.data.message;
    }
    // console.log(message,'message');
    
    eventEmitter.emit('showNotification', {
      message,
      variant: "warning"
    });
    toast.warning(message)
  };
  
  export const globalCatchError = (error: AxiosError<BaseApiResponse>) => {
    let message = "";
    if (error.response?.data?.message) {
      message = error.response?.data.message;
    }
    message &&
      eventEmitter.emit('showNotification', {
        message,
        variant: "error"
      });
      toast.error(message)
  };