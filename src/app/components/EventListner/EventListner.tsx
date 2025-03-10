// import events from "@/app/lib/json/event";
// import useEventEmitter from "@/hooks/utils/useEventEmitter";
import { useCallback } from "react";
import { toast } from "sonner";

export default function EventListeners() {
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
  return null;
}
