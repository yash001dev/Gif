const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root-reducer");

const middleware = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;

//In this Project why you Define Redux....
//If you fetching Data from Frontend React Component than doesn't need of REDUX.
