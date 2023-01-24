import { useEffect, useState } from "react";
import { ArrowsDownUp, Users, Article, CurrencyDollar } from "phosphor-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Chart } from "react-google-charts";

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";

export function DashboarContainer() {
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();

    var data = [
        ["Mes", "despesas", "ganho"],
        ["Janeiro", 8000, 23.3],
        ["fevereiro", 24000, 4.5],
        ["Março", 30000, 14.3],
        ["Abril", 50000, 0.9],
        ["Maio", 60000, 13.1],
        ["Junho", 60000, 13.1],
    ];

    var options = {
        chart: {
            title: "",
            subtitle: "veja as informações no grafico sobre despesas e ganhos.",
        },
    };

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
                <div className={style.dashboard_card_full}>
                    <Chart
                        chartType="Bar"
                        data={data}
                        loader={<PulseLoader color="green" />}
                        options={options}
                        width="100%"
                        height="100%"
                        legendToggle
                    />
                </div>
            </div>
        </div>
    );
}
