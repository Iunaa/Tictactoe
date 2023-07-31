import styles from "./container.module.scss";

function Container({children}){
    return(
        <div className={styles.Container}>
            {children}
        </div>

    );
}

export default Container