// import events from "@/app/lib/json/event";
// import useEventEmitter from "@/hooks/utils/useEventEmitter";
import { useCallback } from "react";
import { toast } from "sonner";

export default function EventListeners() {
    console.log("Hello");
    
 useCallback(
    (data: { message: string; variant: string }) => {
      if (data.variant === "error") {
        toast.error(data.message);
      }

      if (data.variant === "success") {
        toast.success(data.message);
      }

      if (data.variant === "warning") {
        toast.warning(data.message);
      }
    },
    []
  );

//   const router = useRouter();
//   const handleRoutes = useCallback((pathName: string) => {
//     router.push(pathName);
//   }, []);

//   useEventEmitter(events.showNotification, showNotifications);
//   useEventEmitter(events.routerPush, handleRoutes);

  return null;
}
