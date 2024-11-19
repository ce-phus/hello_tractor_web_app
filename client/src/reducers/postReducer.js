import {
    POST_INDEX_REQUEST,
    POST_INDEX_SUCCESS,
    POST_INDEX_FAIL
} from "../constants/index"

export const postIndexReducer = (state = {
    featuredPosts: [],
    popularPosts: [],
}, action) => {
    switch (action.type) {
        case POST_INDEX_REQUEST:
            return { ...state, loading: true };
        
        case POST_INDEX_SUCCESS:
            return {
                ...state,
                loading: false,
                featuredPosts: action.payload.featured_posts,
                popularPosts: action.payload.popular_posts,
            };

        case POST_INDEX_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};