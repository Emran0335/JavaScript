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