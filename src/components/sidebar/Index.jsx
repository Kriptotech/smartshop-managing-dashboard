import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrencyDollar, XCircle, ChartBar } from "phosphor-react";

import style from "./styles.module.css";
import { appContext } from "../../context/Index";

export function Sidebar() {
    const { asideVisible, setasideVisible } = useContext(appContext);
    const navigate = useNavigate();
    async function changeCurrentRoute(params) {
        navigate(`/${params}`);
    }

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

                        <div
                            onClick={() =>
                                changeCurrentRoute("change_media_tax")
                            }
                        >
                            <CurrencyDollar color={"#d5dfe9"} size={20} />
                            <span>Mudar TEM</span>
                        </div>
                        <div
                            onClick={() =>
                                changeCurrentRoute("change_fast_tax")
                            }
                        >
                            <CurrencyDollar color={"#d5dfe9"} size={20} />
                            <span>Mudar TER</span>
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
                                changeCurrentRoute("change_media_tax")
                            }
                        >
                            <CurrencyDollar color={"#d5dfe9"} size={20} />
                            <span>Mudar TEM</span>
                        </div>
                        <div
                            onClick={() =>
                                changeCurrentRoute("change_fast_tax")
                            }
                        >
                            <CurrencyDollar color={"#d5dfe9"} size={20} />
                            <span>Mudar TER</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
