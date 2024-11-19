import axios from "axios";

import {
    POST_INDEX_REQUEST,
    POST_INDEX_SUCCESS,
    POST_INDEX_FAIL
} from "../constants/index"

const API_URL = import.meta.env.VITE_API_URL;

export const getPostIndexList = () => async (dispatch) => {
    try {
        dispatch({ type: POST_INDEX_REQUEST });

        const { data } = await axios.get(`${API_URL}/api/posts/index/`);

        dispatch({ type: POST_INDEX_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: POST_INDEX_FAIL, payload: error.message });
    }
};