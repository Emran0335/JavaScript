// If we want to use redux-toolkit, we have to install npm -y and redux in the file.

const { createStore } = require("redux");

// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
  count: 0,
};

// actions -> Object-type, payload
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

// reducer: it is a pure function as it takes argument and returns value. For this reason, it is called pure function.
const counterReducer = (state = initialCounterState /*(default value)*/, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // it will take all object values and count also. Spread operator brings count from the state.
        count: state.count + 1, //state.count = 0 and 1. so, state.count will be = 1;
      };
    case DECREMENT:
      return {
        ...state, // it will fetch all object values and count also. Spread operator brings count from the state.
        count: state.count - 1, //state.count = 0 and 1. so, state.count will be = 1-1 or 0;
      };
    default:
      state;
  }
};

// state
// action
// reducer
// store -> getState(), dispatch(), subscribe()
// store: it stores the initialState in it. Actually, it holds the states.
// getState(): it helps to know the situation of the states.
// dispatch(): it dispatches an action.
// subscribe(): it helps to connect viewer's information to state. It connects the viewer to the state. As here, there is no viewer, we connect to the basic_redux.js.

// create store
const store = createStore(counterReducer);
// so, store will get all methods of createStore as it is also the method of redux.
// Now, we have to subscribe the subscribe() methods to connect to the basci_redux.js file.

store.subscribe(() => {
    console.log(store.getState()); // result will come out from here.
})

// Now, we have to dispatch action. Here, action is an object-> {type: INCREMENT, payload}
store.dispatch(incrementCounterAction()) // result = {count: 1}, {type:INCREMENT} = incrementCounter()
store.dispatch(incrementCounterAction()); // result = {count: 2}
store.dispatch(incrementCounterAction()); // result = {count: 3}
store.dispatch(decrementCounterAction()); // result = {count: 2}
store.dispatch(decrementCounterAction()); // result = {count: 1}
store.dispatch(decrementCounterAction()); // result = {count: 0}

// incrementCounter -> type:ICREMENT -> store -> counterReducer-> action.type->done-> store.subscribe()-> console.log -> getState() -> state as result.