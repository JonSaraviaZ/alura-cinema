import styles from "./NotFound.module.css"

function NotFound(){
    return(
        <section  className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.text_error}>Página no encontrada. Vuelve al Home para seguir navegando por la web</p>
        </section>

    )
}

export default NotFound