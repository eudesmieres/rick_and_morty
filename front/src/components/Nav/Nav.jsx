import SearchBar from "../SearchBar/SearchBar";
import styles from "../Nav/Nav.module.css";
import logo from "../Nav/logorick.png";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.NavContainer}>
      <div className={styles.button}>
        <Link to="/" className={styles.logout}>
          LOGOUT
        </Link>
        <Link to="/about" className={styles.about}>
          About
        </Link>
        <Link to="/home" className={styles.home}>
          Home
        </Link>
        <Link to="/favorites" className={styles.home}>
          Favorites
        </Link>
      </div>
      <div className={styles.buttonSearch}>
        <img className={styles.img} src={logo} alt="" />
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
