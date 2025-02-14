import { ButtonHTMLAttributes, ReactNode } from "react";
import css from "./Button.module.css";
import { SizeTypes } from "@/6_shared/ui/types.ts";
import classNames from "classnames";

type ButtonVariants = "contained" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants;
  size?: SizeTypes;
}

export const Button = ({
  size,
  children,
  variant = "contained",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        css.root,
        css[`root_variant_${variant}`],
        css[`root_size_${size}`]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
