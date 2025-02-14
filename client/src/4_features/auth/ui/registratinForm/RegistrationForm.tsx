import { Button, InputWithLabel } from "@/6_shared/ui";
import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationFormValidation } from "../../lib/registrationFormValidation";
import { UserFormFieldsTypes } from "../../model/types";
import { FieldError } from "@/6_shared/ui/FieldError/FieldError";
import { registrationThunk } from "../../model/registrationThunk";
import { useAppDispatch } from "@/1_app/appStore";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFieldsTypes>({
    resolver: zodResolver(registrationFormValidation),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: UserFormFieldsTypes) => {
    await dispatch(registrationThunk(data)).unwrap();
  };

  return (
    <form className={css.root} onSubmit={handleSubmit(onSubmit)}>
      <h3>Регистрация</h3>
      <InputWithLabel
        register={register}
        placeholder="Имя пользователя"
        field="username"
      />
      {errors.username && <FieldError message={errors.username.message} />}
      <InputWithLabel
        register={register}
        placeholder="Пароль"
        type="password"
        field="password"
        autoComplete="on"
      />
      {errors.password && <FieldError message={errors.password.message} />}
      <div className={css.buttonsBox}>
        <Button type="submit">Зарегистрироваться</Button>
        <Link to="/auth/login">Уже есть аккаунт?</Link>
      </div>
    </form>
  );
};
