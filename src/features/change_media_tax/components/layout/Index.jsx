import style from "./styles.module.css";

import { Sidebar } from "../../../../components/sidebar/Index";
import { Main } from "../main/Index";

export function Layout() {
    return (
        <div className={style.layout}>
            <Sidebar />
            <Main />
        </div>
    );
}
