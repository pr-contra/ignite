import styles from './Avatar.module.css';

export const Avatar = ({ src, hasBorder }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
};
