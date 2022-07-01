import igniteLogo from '../assets/ignite-logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite logo" />
    </header>
  );
};
