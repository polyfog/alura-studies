import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component {
    render() {
        // const backgroundColor = 'green';
        // const estaAtivo = true;
        // const styles = {
        //     backgroundColor: estaAtivo ? 'green' : 'blue'
        // };
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Botao;