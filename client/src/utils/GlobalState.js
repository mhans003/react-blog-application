import React, { createContext, useReducer, useContext } from "react";

//Import actions.
import {
    UPDATE_POSTS,
    LOADING,
    SET_CURRENT_POST,
    ADD_POST
} from "./actions";

//Create the Global Store.
const StoreContext = createContext();
const { Provider } = StoreContext;

//Create the reducer and switch on the different action types.
const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_POSTS:
            return {
                ...state,
                posts: [...action.posts] 
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.post,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts],
                loading: false
            };
        default:
            return state;
    }
};

//Establish the Store Provider with initial state object.
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        posts: [],
        currentPost: {
            _id: 0,
            title: "",
            body: "",
            author: ""
        },
        favorites: [],
        loading: false
    });

    //Return the provider for the global store.
    return <Provider value={[state, dispatch]} {...props}/>
};

//Return the context for the global state.
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

