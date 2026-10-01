import { useEffect, useState } from "react";

export default function useHeroRoles(roles = []) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles.length) return;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [roles]);

  return roles[index] ?? "";
}