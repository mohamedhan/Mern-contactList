import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";

const middleware = [thunk];
const store = createStore(
  contactReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
