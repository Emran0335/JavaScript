// initial state
// actions
// reducer
// store
// dispatch action through dispatch method to reducer

const { createStore } = require("redux");

// initial state. It is also an object

const initialStateCounter = {
    count: 0
}

// constants of actions
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// actions that return object
const incrementCountAction = () => {
    return {
      type: INCREMENT,
    };
}

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

const incrementCountByValueAction = (value) => {
  return {
      type: INCREMENT_BY_VALUE,
      payload: value // if we want to receive data in the action, we need to use payload.
  };
};

// creating reducer function

const counterReducer = (state = initialStateCounter, action) => {
    switch (action.type) {
      case INCREMENT: // it will aslo return an object.
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT: // it will aslo return an object.
        return {
          ...state,
          count: state.count - 1,
        };
      case RESET: // it will aslo return an object.
        return {
          ...state,
          count: 0,
        };
      case INCREMENT_BY_VALUE: // it will aslo return an object but it will also receive data through payload from the user.
        return {
          ...state,
          count: state.count + action.payload,
        };

      default:
        state;
    }
}

// creating store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

// Let's send action through dispatch method

store.dispatch(incrementCountByValueAction(5));  // { count: 5 }
store.dispatch(incrementCountByValueAction(10));  // { count: 15 }
store.dispatch(incrementCountAction());  // { count: 16 }
store.dispatch(decrementCountAction());  // { count: 15 }
store.dispatch(resetCountAction());  // { count: 0 }
