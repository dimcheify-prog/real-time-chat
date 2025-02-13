import {ReactNode} from "react";
import css from "./Layout.module.css";
import {Outlet} from "react-router";

interface LayoutProps {
    headerSlot?: ReactNode;
    sidebarSlot?: ReactNode;
}

export const  Layout = ({headerSlot, sidebarSlot}: LayoutProps) => {
    return (
        <div className={css.root}>
            {headerSlot && headerSlot}
            {sidebarSlot && sidebarSlot}
            <Outlet/>
        </div>
    )
}