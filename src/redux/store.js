const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root-reducer");

const middleware = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;