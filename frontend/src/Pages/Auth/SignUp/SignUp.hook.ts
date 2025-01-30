import { useState } from "react";
import { SignUpProps } from "./SignUp";

export const useSignUp = (props: SignUpProps) => {
  const { setSignInActive } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignInPage = () => {
    setSignInActive(true);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    goToSignInPage,
  };
};
