import {useState} from 'react';
import styles from "../molecules/square.module.scss";

function Square ({value, onSquareClick}) {

    return(
        <button className="square" onClick={onSquareClick}>{value}</button>

    );
}

export default Square