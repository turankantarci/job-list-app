import styles from './style.module.scss';

const Container = ({ children, withColor }) => {
    return (
        <div className={`${styles.container} ${withColor && styles.withColor}`}>{children}</div>
    )
}

export default Container;