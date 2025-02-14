import { LoginForm } from "@/4_features/auth";
import css from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={css.root}>
      <LoginForm />
    </div>
  );
};
