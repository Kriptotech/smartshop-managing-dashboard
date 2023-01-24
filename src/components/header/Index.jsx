import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { House, List } from "phosphor-react";

import style from "./styles.module.css";
import { appContext } from "../../context/Index";
import { MenuModal } from "../Modals/Menu_Modal/Index.jsx";

export function Header() {
    const navigate = useNavigate(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // context
    const { asideVisible, setasideVisible } = useContext(appContext);

    return (
        <header className={style.main_header}>
            <nav>
                <button
                    onClick={() => {
                        navigate("/dashboard");
                    }}
                    className={style.home_btn}
                >
                    <House color="#66b2e0" size={28} />
                </button>

                <button
                    onClick={() => {
                        setasideVisible(true);
                    }}
                    className={style.mobile_btn}
                >
                    <List color="#66b2e0" size={28} />
                </button>

                <img
                    src="profile.png"
                    alt=""
                    onClick={() => setIsModalVisible(!isModalVisible)}
                ></img>
            </nav>

            {isModalVisible && <MenuModal />}
        </header>
    );
}
