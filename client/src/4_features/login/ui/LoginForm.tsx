import css from "./LoginForm.module.css";
import {Button, InputWithLabel} from "@/6_shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { logitFormValidation } from "../lib/loginFormValidation";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{username: string, password: string}>({ resolver: zodResolver(logitFormValidation) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={css.root} onSubmit={handleSubmit(onSubmit)}>
      <h3>Вход</h3>
      <InputWithLabel
        register={register}
        field="username"
        placeholder="Имя пользователя"
      />
      <InputWithLabel
        register={register}
        field="password"
        placeholder="Пароль"
        type="password"
      />
      <Button type="submit">Войти</Button>
    </form>
  );
};
