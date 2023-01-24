import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, XCircle, Database, List } from "phosphor-react";
import Style from "./Style.module.css";

export const MenuModal = ({ userData }) => {
    const navigate = useNavigate();

    // submit values
    const logOutUser = async () => {
        navigate("/");
    };

    return (
        <div data-aos="fade-down" className={Style.Menu_Modal}>
            <div className={Style.Menu_Modal_account_links}>
                <span onClick={logOutUser}>
                    <XCircle size={25} color="#66b2e0" /> SAIR DA PLATFORMA
                </span>
            </div>
        </div>
    );
};
