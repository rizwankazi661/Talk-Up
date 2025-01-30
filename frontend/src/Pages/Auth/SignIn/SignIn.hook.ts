import { useState } from "react";
import { SignInProps } from "./SignIn";

export const useSignIn = (props: SignInProps) => {
  const { setSignInActive } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignUpPage = () => {
    setSignInActive(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    goToSignUpPage,
  };
};
