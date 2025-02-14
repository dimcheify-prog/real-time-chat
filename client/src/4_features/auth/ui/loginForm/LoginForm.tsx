import css from "./LoginForm.module.css";
import { Button, InputWithLabel } from "@/6_shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { logitFormValidation } from "../../lib/loginFormValidation";
import { useAppDispatch } from "@/1_app/appStore";
import { loginThunk } from "../../model/loginThunk";
import { UserFormFieldsTypes } from "../../model/types";
import { FieldError } from "@/6_shared/ui/FieldError/FieldError";
import { Link } from "react-router";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFieldsTypes>({
    resolver: zodResolver(logitFormValidation),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    await dispatch(loginThunk(data)).unwrap();
  };

  return (
    <form className={css.root} onSubmit={handleSubmit(onSubmit)}>
      <h3>Вход</h3>
      <InputWithLabel
        register={register}
        field="username"
        placeholder="Имя пользователя"
      />
      {errors.username && <FieldError message={errors.username.message} />}
      <InputWithLabel
        register={register}
        field="password"
        placeholder="Пароль"
        type="password"
        autoComplete="on"
      />
      {errors.password && <FieldError message={errors.password.message} />}
      <div className={css.buttonsBox}>
        <Button type="submit">Войти</Button>
        <Link to="/auth/register">Еще нет аккаунта?</Link>
      </div>
    </form>
  );
};
