import css from "./FieldError.module.css";

interface FieldErrorProps {
  message: string;
}

export const FieldError = ({ message }: FieldErrorProps) => {
  return <span className={css.root}>{message}</span>;
};
