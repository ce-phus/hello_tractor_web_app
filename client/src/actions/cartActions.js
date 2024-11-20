import axios from 'axios'

import {
    CART_ADD_ITEM_SUCCESS,
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_FAIL,

    CART_CLEAR_REQUEST,
    CART_CLEAR_SUCCESS,
    CART_CLEAR_FAIL,

    CART_REMOVE_ITEM_REQUEST,
    CART_REMOVE_ITEM_SUCCESS,
    CART_REMOVE_ITEM_FAIL,

} from "../constants/index"

const API_URL = import.meta.env.VITE_API_URL;

// cartActions.js
export const addToCart = (postId, quantity = 1, updateQuantity = false) => async (dispatch) => {
    try {
        dispatch({
            type: CART_ADD_ITEM_REQUEST,
            payload: { postId, quantity, updateQuantity }
        });
        const response = await axios.post(`${API_URL}/api/cart/`, {
            post_id: postId,
            quantity,
            update_quantity: updateQuantity
        });
  
        if (response.data.cart) {
            dispatch({
                type: CART_ADD_ITEM_SUCCESS,
                payload: response.data.cart, 
            });
        } else {
            throw new Error('Unexpected response format');
        }
        console.log("New Cart Payload: ", response.data.cart);
    } catch (error) {
        console.error("Error adding to cart: ", error.response ? error.response.data : error.message);
        dispatch({
            type: CART_ADD_ITEM_FAIL,
            payload: error.response ? error.response.data : error.message,
        });
    }
  };

  
  export const removeFromCart = (postId) => async (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM_REQUEST });

    try {
        const response = await axios.delete(`${API_URL}/api/cart/`, {
            data: { post_id: postId }
        });
        
        const updatedCartItems = response.data.cartItems || getState().cartReducer.cartItems.filter(item => item.id !== productId);

        dispatch({
            type: CART_REMOVE_ITEM_SUCCESS,
            payload: updatedCartItems,
        });
    } catch (error) {
        dispatch({
            type: CART_REMOVE_ITEM_FAIL,
            payload: error.response ? error.response.data : { message: error.message },
        });
    }
};



export const clearCart = () => async(dispatch) => {
    try {
        dispatch({ type: CART_CLEAR_REQUEST })
        const { data } = await axios.put(`${API_URL}/api/cart/`
        )
        dispatch({
            type: CART_CLEAR_SUCCESS,
            payload: data,
            })
    } catch (error) {
        dispatch({
            type: CART_CLEAR_FAIL,
            payload: error.response.data,
            })
        }

}