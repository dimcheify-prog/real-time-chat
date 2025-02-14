import { RegistrationForm } from "@/4_features/auth";
import css from "./RegistrationPage.module.css";

export const RegistrationPage = () => {
  return (
    <div className={css.root}>
      <RegistrationForm />
    </div>
  );
};
