// redux basic -> first file(1)
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
const counterReducer = (
  state = initialCounterState /*(default value)*/,
  action
) => {
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
});

// Now, we have to dispatch action. Here, action is an object-> {type: INCREMENT, payload}
store.dispatch(incrementCounterAction()); // result = {count: 1}, {type:INCREMENT} = incrementCounter()
store.dispatch(incrementCounterAction()); // result = {count: 2}
store.dispatch(incrementCounterAction()); // result = {count: 3}
store.dispatch(decrementCounterAction()); // result = {count: 2}
store.dispatch(decrementCounterAction()); // result = {count: 1}
store.dispatch(decrementCounterAction()); // result = {count: 0}

// incrementCounter -> type:ICREMENT -> store -> counterReducer-> action.type->done-> store.subscribe()-> console.log -> getState() -> state as result.


// reduxWithReset.js -> second file(2)
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


// reduxWithMultipleReducers.js -> third file(3)
// Multiple Reducers

const { createStore, combineReducers } = require("redux");

// All about product
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialProductState = {
  // this is an object
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

// define actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// productReducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };
    default:
      //state;
      return state;
  }
};

// don't need to create store here. But we will two it after two reducers.

// all about cart
// cart constants type
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// initial state of cart
const initialCartItemState = {
  items: ["sugar"],
  numberofItems: 1,
};

// actions for cart
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

// cartReducer
const cartReducer = (state = initialCartItemState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        items: [...state.items, action.payload],
        numberofItems: state.numberofItems + 1,
      };
    default:
      //   state;
      return state;
  }
};

// as createStore receives only one reducer. So, we can use combineReducers method(it takes object as parameter) from redux to combine many reducers and we have to store it in a variale(let say, rootReducer). Then pass the rootReducer to the createStore method.
// creating store
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// here shown combinereducrs example. But it is not well organized. It have to use middleware to maintain each reducer and action.
//action dispatch
store.dispatch(getProducts());
/*
{
  productR: { products: [ 'sugar', 'salt' ], numberofProducts: 2 },
  cartR: { items: [ 'sugar' ], numberofItems: 1 }
}
*/
store.dispatch(addProduct("potatoes"));
/*
{
  productR: { products: [ 'sugar', 'salt', 'potatoes' ], numberofProducts: 3 },
  cartR: { items: [ 'sugar' ], numberofItems: 1 }
}
*/


// reduxWithPayload.js -> fourth file(4)
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
store.dispatch(addUsersAction("Ruhul")); // { users: [ 'Emran', 'Hossain', 'Ruhul' ], count: 3 }
store.dispatch(addUsersAction("Amin")); // { users: [ 'Emran', 'Hossain', 'Ruhul', 'Amin' ], count: 4 }


// reduxWithPayloadAgain.js -> fifth file(5)
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



// reduxWithMultipleReducersHandleWithMiddleware.js -> sixth file(6)
// Middleware
// Middleware works between the dispatch of action and reducers.
// If we want to use middleware, we need to install redux-logger middleware as it is very popular.

// we have to import applyMiddleware method from redux.
const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// All about product
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialProductState = {
  // this is an object
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

// define actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// productReducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };
    default:
      //state;
      return state;
  }
};

// create store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts()); // { products: [ 'sugar', 'salt' ], numberofProducts: 2 }
store.dispatch(addProduct('pen')); // { products: [ 'sugar', 'salt', 'pen' ], numberofProducts: 3 }

/*
 // logger returns
 { products: [ 'sugar', 'salt' ], numberofProducts: 2 }
 action GET_PRODUCTS @ 12:43:45.740
   prev state { products: [ 'sugar', 'salt' ], numberofProducts: 2 }
   action     { type: 'GET_PRODUCTS' }
   next state { products: [ 'sugar', 'salt' ], numberofProducts: 2 }
{ products: [ 'sugar', 'salt', 'pen' ], numberofProducts: 3 }
 action ADD_PRODUCT @ 12:43:45.748
   prev state { products: [ 'sugar', 'salt' ], numberofProducts: 2 }
   action     { type: 'ADD_PRODUCT', payload: 'pen' }
   next state { products: [ 'sugar', 'salt', 'pen' ], numberofProducts: 3 }
*/



// reduxFetchDataWithRedux-Thunk.js -> seventh file(7)
// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware -redux-thunk(it is a famous middleware when we want to fetch data)
// axios api(it will be used to fetch data)

const axios = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// states
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// actions
// constants -> if there is any erro, expected result will go to another action.
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
// api calling...
const API_URL = "https://jsonplaceholder.typicode.com/todos"; // if I give wrond url, then error will be given.
// action type
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

// reducers
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

// async action creator -> it will check the data which is successful or not and then dispatchs the actions which we have already created.
const fetchData = () => {
  // this function will return action functions. But we have to install redux-thunk
  return (dispatch) => {
    dispatch(getTodosRequest()); //{ todos: [], isLoading: true, error: null }
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles)); // if no error, all titles will be stored in todos array.
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getTodosFailed(errorMessage)); // if there is an error, null state will be changed with error message.
      });
  };
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData()); // dispatch() only expect any function with return value as an object. But fetchData() function returns a function as applyMiddleware(thunk), thunk works to handle it to do so.

// we have to practice it again and again to get the concept clear

/*

    applyMiddleware(thunk) is not used..... the problem will be like below.
    Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
*/
