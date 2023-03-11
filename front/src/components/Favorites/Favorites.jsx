import { useSelector, useDispatch } from "react-redux";
import styles from './Favorites.module.css';
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions/actions";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return(
        <div>
            <div>
                <select onChange={handlerOrder}>
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                <option value="filter" disabled='disabled'>Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
                </select>
            </div>
            {
                myFavorites?.map((character) => {
                    return(
                        <div>
                            <div className={styles.buttonContainerx}>
                             {/* <button onClick={onClose}>x</button> */}
                            </div>
                            <img className={styles.image} src={character.image} alt={character.name} />
                            <div className={styles.dataContainer}>
                            <Link to={`/detail/${character.id}`}>
                            <h2>{character.name}</h2>
                            </Link>
                            <h4>{character.species}</h4>
                            <h4>{character.gender}</h4>
                           </div>
             
                        </div>
                    )
                })
            }

        </div>
    )
}


export default Favorites;