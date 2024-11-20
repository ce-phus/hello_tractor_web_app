import { combineReducers } from "redux";

import { 
    userLoginReducer,
    userRegisterReducer,
    userActivateReducer,
    userResetPasswordConfirmReducer,
    userResetPasswordReducer,
     } from "./userReducer";

import {
    postIndexReducer,
    listAllPostsReducer,
    createPostReducer,
    updatePostReducer,
    deletePostReducer,
    searchPostReducer,
    postDetailsReducer,
} from "./postReducer"


import {
    getProfileReducer,
    profileUpdateReducer,
    agentListReducer,
    topAgentsListReducer,
    listUserProfileReducer,
    getUserProfileReducer
} from "./profileReducer";


const allReducers = combineReducers({
    userLoginReducer,
    userRegisterReducer,
    userActivateReducer,
    userResetPasswordConfirmReducer,
    userResetPasswordReducer,
    postIndexReducer,
    getProfileReducer,
    profileUpdateReducer,
    agentListReducer,
    topAgentsListReducer,
    listUserProfileReducer,
    getUserProfileReducer,
    listAllPostsReducer,
    createPostReducer,
    updatePostReducer,
    deletePostReducer,
    searchPostReducer,
    postDetailsReducer,
});

export default allReducers