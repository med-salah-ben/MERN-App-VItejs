import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { editReducer } from "./edit";

export const rootReducer = combineReducers({contactReducer , editReducer})