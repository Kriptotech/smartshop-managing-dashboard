import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";

import style from "./styles.module.css";

export function LoginContainer() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [number, setnumber] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(true);

    const handleSubmit = async (event) => {
        setMessage("");
        event.preventDefault();
        const values = {
            number: Number(number),
            password,
        };

        navigate("/dashboard");
    };

    return (
        <>
            <div className={style.login_container}>
                <div
                    className={style.login_container_left}
                    data-aos="fade-left"
                >
                    <form onSubmit={handleSubmit}>
                        <h1>SEJA BEM VINDO</h1>
                        <p>Faça login na plataforma</p>
                        <input
                            required
                            onChange={(e) => setnumber(e.target.value)}
                            type="number"
                            placeholder="Seu telefone"
                        />
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Sua senha"
                        />
                        {message && (
                            <p style={{ color: "red" }}>
                                <span>{message}</span>
                            </p>
                        )}
                        <button>
                            {isLoading ? (
                                <PulseLoader color="white" />
                            ) : (
                                "LOGIN"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
