import { useState } from "react";

export const useAuth = () => {
  const [isSignInActive, setSignInActive] = useState<boolean>(true);

  return {
    isSignInActive,
    setSignInActive,
  };
};
