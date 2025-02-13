import css from "./LoginPage.module.css";
import {LoginForm} from "@/4_features/login";

export const LoginPage = () => {
    return (
        <div className={css.root}>
            <LoginForm/>
        </div>
    );
};
