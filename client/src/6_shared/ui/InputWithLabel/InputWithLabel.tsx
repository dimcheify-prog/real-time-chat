import { InputHTMLAttributes } from "react";
import css from "./InputWithLabel.module.css";
import classNames from "classnames";
import { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";
import {SizeTypes} from "@/6_shared/ui/types.ts";

type InputAttr = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

interface InputWithLabelProps<T extends FieldValues> extends InputAttr {
  size?: SizeTypes;
  field: FieldPath<T>;
  register: UseFormRegister<T>;
}

export const InputWithLabel = <T extends FieldValues>({
  size,
  placeholder,
  field,
  register,
  ...rest
}: InputWithLabelProps<T>) => {
  return (
    <input
      {...register(field)}
      className={classNames(css.root, css[`root_size_${size}`])}
      placeholder={placeholder}
      {...rest}
    />
  );
};
