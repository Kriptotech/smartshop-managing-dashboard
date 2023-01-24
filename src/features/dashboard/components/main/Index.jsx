import { useEffect, useState } from "react";
import { ArrowsDownUp, Users, Article, CurrencyDollar } from "phosphor-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";

export function DashboarContainer() {
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();

    return (
        <div className={style.dashboard}>
            <Header />

            <div className={style.dashboard_cards_box}>
                <div className={style.dashboard_card}>
                    <div className={style.dashboard_card_row}>
                        <div>
                            <span>kskdkkfdjfdjjjj</span>
                            {isLoading ? (
                                <PulseLoader color="green" />
                            ) : (
                                <span>0</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className={style.dashboard_card}>
                    <div className={style.dashboard_card_row}>
                        <div>
                            <span>kskdkkfdjfdjjjj</span>
                            {isLoading ? (
                                <PulseLoader color="green" />
                            ) : (
                                <span>0</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className={style.dashboard_card}>
                    <div className={style.dashboard_card_row}>
                        <div>
                            <span>kskdkkfdjfdjjjj</span>
                            {isLoading ? (
                                <PulseLoader color="green" />
                            ) : (
                                <span>0MT</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
