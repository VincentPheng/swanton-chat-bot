import { useEffect } from "react";

export default function useEscape(callback) {
  // calls the given callback when the "q" key is pressed
  const onEscape = (e) => e.key === "q" && callback(e);

  useEffect(() => {
    window.addEventListener("keypress", onEscape);
    return () => window.removeEventListener("keypress", onEscape);
  });
}
