import { LoginForm } from "@/4_features/auth";
import css from "./LoginPage.module.css";
import { io } from "socket.io-client";
import { Button } from "@/6_shared/ui";
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const soket = io("http://localhost:8080");
  const [msg, setMsg] = useState();

  useEffect(() => {
    soket.connect();

    return () => {
      soket.disconnect();
    };
  }, []);

  const handleTestIO = () => {
    soket.on("new-message", (mesage) => {
      setMsg(mesage);
    });
  };

  return (
    <div className={css.root}>
      <Button onClick={handleTestIO}>Text IO</Button>
      {msg && msg}
      <LoginForm />
    </div>
  );
};
