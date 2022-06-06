import { useEffect } from "react";

export function useLocationTitle(title) {
  title = title ? title : "Admin";
  useEffect(() => {
    document.title = `House to Home | ${title}`;
  });
}
