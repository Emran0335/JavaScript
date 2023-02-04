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