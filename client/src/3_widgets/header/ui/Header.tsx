import { useAppDispatch, useAppSelector } from "@/1_app/appStore";
import { selectUserData } from "@/4_features/auth";
import { Button } from "@/6_shared/ui";
import { logout } from "@/4_features/auth";
import css from "./Header.module.css";

export const Header = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector(selectUserData);
  return (
    <header className={css.root}>
      <span className={css.root_username}>{userData.username}</span>
      <Button size="sm" onClick={() => dispatch(logout())}>
        Выйти
      </Button>
    </header>
  );
};
