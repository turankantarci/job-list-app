import Image from 'next/image';
import styles from './style.module.scss';

const ImageBox = ({ src, alt, width, height }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={styles.image} />
  )
}

export default ImageBox;