import styles from './style.module.scss';

const Button = ({ type, text }) => {
    return (
        <button className={styles.button} type={type}>{text}</button>
    )
}

export default Button;