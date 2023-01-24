import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";

export function Main() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.container_header}>
                <h1>Mudar taxa de entrega rápida</h1>
            </div>

            <div className={style.container_row_container}>
                <form>
                    <h4>Mude a taxa de entrega rápida</h4>
                    <p>
                        Mude a taxa de entrega rápida no campo abaixo, caso
                        tenha cometido um erro, mude de novo para corrigi o
                        erro.
                    </p>

                    <div>
                        <input
                            placeholder="Taxa"
                            type="number"
                            // onChange={(e) => setamount(e.target.value)}
                        />
                    </div>
                    <br />
                    {/* <p style={{ color: "tomato" }}>messag</p> */}
                    <button>SALVAR</button>
                </form>
            </div>
        </div>
    );
}
