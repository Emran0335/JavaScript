// initial State
// action
// reducer
// store

const { createStore } = require("redux");

//initial state
const initialStateCounter = {
  count: 0,
};

// action
// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const incrementCountAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCountAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetCountAction = () => {
  return {
    type: RESET,
  };
};

// reducer
const reducerCount = (state = initialStateCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      state;
  }
};

const store = createStore(reducerCount)
store.subscribe(() => {
    console.log(store.getState());
})


// we have to pass action to reducer through dispatch function.
store.dispatch(incrementCountAction());  // { count: 1 }
store.dispatch(incrementCountAction());  // { count: 2 }
store.dispatch(incrementCountAction());  // { count: 3 }
store.dispatch(decrementCountAction());  // { count: 2 }
store.dispatch(resetCountAction());  // { count: 0 }
