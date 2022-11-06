import toast from "react-hot-toast";
export const successNotify = (message) => toast.success(message);
export const warningNotify = (message) =>
  toast(message, {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
