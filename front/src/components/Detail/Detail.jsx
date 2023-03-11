import styles from "../Detail/Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detailContainer}>
      <Link to="/home">Home</Link>
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img
        className={styles.imagen}
        src={character?.image}
        alt={character?.name}
      />
    </div>
  );
};

export default Detail;
