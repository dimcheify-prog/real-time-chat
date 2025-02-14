import { z } from "zod";

export const logitFormValidation = z.object({
  username: z
    .string()
    .min(3, { message: "Имя долно содержать минимум 3 символа" }),
  password: z
    .string()
    .min(5, { message: "Пароль должен содержать минимум 5 символов" }),
});
