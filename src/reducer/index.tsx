import InfoReducer from "./InfoReducer";
import ArticleReducer from "./ArticleReducer";
import UserReducer from "./UserReducer";

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux";

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    // ArticleInfo: ArticleReducer,
    BlogInfo: InfoReducer,
    // UserInfo: UserReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer