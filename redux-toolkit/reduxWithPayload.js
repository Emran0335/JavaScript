// initial state
// action
// reducer
// store

const { createStore } = require("redux");

// 1. initial state -> it should be an object.

const initialState = {
  users: ["Emran"],
  count: 1,
};

// 2. action
// constants
const ADD_USERS = "ADD_USERS";
const addUsersAction = (user) => {
  return {
    type: ADD_USERS,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        users: [...state.users, action.payload],
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

store.dispatch(addUsersAction("Hossain")); // { users: [ 'Emran', 'Hossain' ], count: 2 }