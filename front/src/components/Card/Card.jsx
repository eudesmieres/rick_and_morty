import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";

export default function Card({ name, species, gender, image, onClose, id }) {
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const [isFav, setIsfav] = useState(false);
    
    const handleFavorite = () => {
        if(isFav){
          setIsfav(false);
          dispatch(deleteFavorite(id));
          console.log(isFav)
        }
        else{
          setIsfav(true);
          dispatch(addFavorite({ name, species, gender, image, onClose, id }))
        }
    }

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);

  //  const onCloseCard= ()=> {
  //   onClose(id);
  //   dispatch(deleteFavorite(id));
  //  }

  return (
    <div className={styles.divContainer}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
      }
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
