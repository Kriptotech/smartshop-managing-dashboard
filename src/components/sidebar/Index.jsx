import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Users, XCircle, ChartBar, CurrencyDollar } from "phosphor-react";

import style from "./styles.module.css";
import { appContext } from "../../context/Index";

export function Sidebar() {
    const { asideVisible, setasideVisible } = useContext(appContext);
    const navigate = useNavigate();
    async function changeCurrentRoute(params) {}

    return (
        <>
            <header className={style.main_header}>
                <div className={style.sidebar}>
                    <div className={style.sidebar_first_div_box}>
                        <div>
                            <span>Eduardo</span>
                            <span>eufrasiojoao00@gmail.com</span>
                        </div>
                    </div>

                    <div className={style.sidebar_second_div_box}>
                        <div onClick={() => changeCurrentRoute("dashboard")}>
                            <ChartBar color={"#d5dfe9"} size={20} />
                            <span>Dashboard</span>
                        </div>

                        <div onClick={() => changeCurrentRoute("customers")}>
                            <Users color={"#d5dfe9"} size={20} />
                            <span>ddddgfdf</span>
                        </div>
                    </div>
                </div>
            </header>

            {/*Mobile version */}
            <header className={style.main_header_mobile}>
                <div
                    className={
                        asideVisible
                            ? style.sidebar_mobile_visible
                            : style.sidebar_mobile
                    }
                >
                    <div className={style.sidebar_first_div_box}>
                        <button onClick={() => setasideVisible(false)}>
                            <XCircle color="rgba(157, 109, 235, 1)" size={28} />
                        </button>

                        <div onClick={() => changeCurrentRoute("dashboard")}>
                            <ChartBar color={"#d5dfe9"} size={20} />
                            <span>Dashboard</span>
                        </div>

                        <div
                            onClick={() =>
                                changeCurrentRoute("confirm-float-request")
                            }
                        >
                            <CurrencyDollar color={"#d5dfe9"} size={20} />
                            <span>skkskdkdk</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
