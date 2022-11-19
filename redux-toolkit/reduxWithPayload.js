// initial state
// action
// reducer
// store

const { createStore } = require("redux");

// 1. initial state -> it should be an object.

const initialState = {
  user: ["Emran"],
  count: 1,
};

// 2. action
// constants
const INCREMENT_USER = "INCREMENT_USER";
const incrementUserAction = (user) => {
  return {
    type: INCREMENT_USER,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};


// create store
const store = createStore(userReducer)
store.subscribe(() => {
    console.log(store.getState());
})


// send action to the userReducer through dispatch() method.

store.dispatch(incrementUserAction("Hossain")); // { user: [ 'Emran', 'Hossain' ], count: 2 }