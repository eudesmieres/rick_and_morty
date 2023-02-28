import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.divContainer}>
      <div className={styles.buttonContainerx}>
        <button onClick={onClose}>x</button>
      </div>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.dataContainer}>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h4>{species}</h4>
        <h4>{gender}</h4>
      </div>
    </div>
  );
}
