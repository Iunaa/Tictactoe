import style from  "../Header/header.module.scss";

function Header() {
    return(
        <div className={style.headerGame}>
            <h1 className={style.headerGame__title}>Tic Tac Toe</h1>
            <button className={style.headerGame__button}>Exit</button>
        </div>

    );

}

export default Header