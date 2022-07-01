import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder, ...props }: Avatar) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};
