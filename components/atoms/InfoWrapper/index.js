import styles from './style.module.scss';

const InfoWrapper = ({ children, withHover }) => {
  return (
    <div className={`${styles.infoWrapper} ${withHover && styles.withHover}`}>
      {children}
    </div>
  )
}

export default InfoWrapper