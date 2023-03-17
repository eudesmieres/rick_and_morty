import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, GET_CHARACTERS } from "./action-types";
import axios from "axios";

export function addFavorite(character) {
    return function (dispatch) {
        axios
            .post("http://localhost:3001/rickandmorty/favs", character)
            .then((response) => {
                return dispatch({
                    type: ADD_FAVORITE,
                    payload: response.data,
                })
            })
    }
}

export function deleteFavorite(id) {
    return function (dispatch) {
        axios
            .delete(`http://localhost:3001/rickandmorty/favs${id}`)
            .then(response => {
                return dispatch({
                    type: DELETE_FAVORITE,
                    payload: response.data,
                });
            })
    }
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id }
}

export const getCharacter = (payload) => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}