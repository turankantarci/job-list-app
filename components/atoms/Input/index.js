import styles from './style.module.scss';

const Input = ({ type, name, id, onChange, placeholder, labelText }) => {
    return (
        <>
            {labelText && <label className={styles.label} htmlFor={id}>{labelText}</label>}
            <input className={styles.input} type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} />
        </>
    )
}

export default Input;