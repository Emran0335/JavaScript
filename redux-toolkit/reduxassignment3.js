/*
** store **
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./cart/actionType";
import {
    addManyQuantity,
    addProductQuantity,
    removeProductQuantity,
} from "./product/actions";
import rootReducer from "./rootReducer";
const productManagementMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TO_CART:
      store.dispatch(removeProductQuantity(action.payload));
      return next(action);

    case REMOVE_FROM_CART:
      store.dispatch(addProductQuantity(action.payload));
      return next(action);

    case DELETE_ITEM:
      store.dispatch(addManyQuantity(action.payload));
      return next(action);
    default:
      return next(action);
  }
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productManagementMiddleware))
);
export default store;
** rootReducer **
import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});
export default rootReducer;
** Product Reducer **
export const ADD_PRODUCT = "product/add";
export const ADD_PRODUCT_QUANTITY = "product/addQuantity";
export const REMOVE_PRODUCT_QUANTITY = "product/removeQuantity";
export const ADD_MANY_QUANTITY = "product/addManyQuantity";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
  ADD_MANY_QUANTITY,
} from "./actionType";
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const addProductQuantity = (product) => {
  return {
    type: ADD_PRODUCT_QUANTITY,
    payload: product,
  };
};
export const removeProductQuantity = (product) => {
  return {
    type: REMOVE_PRODUCT_QUANTITY,
    payload: product,
  };
};
export const addManyQuantity = (product) => {
  return {
    type: ADD_MANY_QUANTITY,
    payload: product,
  };
};
import {
  ADD_MANY_QUANTITY,
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionType";
const nextId = (state) =>
  state.reduce((maxID, item) => Math.max(item.id, maxID), -1) + 1;
const initialState = [];
const productReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      const newProduct = { ...payload, id: nextId(state) };
      copiedState.push(newProduct);
      return copiedState;
    case ADD_PRODUCT_QUANTITY:
      return copiedState.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case REMOVE_PRODUCT_QUANTITY:
      if (action.payload.quantity <= 0) {
        return state;
      } else {
        return copiedState.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    case ADD_MANY_QUANTITY:
      return copiedState.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity + payload.cartQuantity }
          : item
      );
    default:
      return state;
  }
};
export default productReducer;
** Cart Reducer **
export const ADD_TO_CART = "cart/add";
export const REMOVE_FROM_CART = "cart/remove";
export const DELETE_ITEM = "cart/delete";
import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM } from "./actionType";
export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
export const deleteCart = (product) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};
import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM } from "./actionType";
const isExist = (state, payload) =>
  state.some((item) => item.id === payload.id);
const initialState = [];
const cartReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    // add product to cart
    case ADD_TO_CART:
      if (isExist(state, payload)) {
        if (payload.quantity <= 0) {
          return state;
        }
        return copiedState.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity + 1,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        copiedState.push({
          ...payload,
          cartQuantity: 1,
          quantity: payload.quantity - 1,
        });
        return copiedState;
      }
    case REMOVE_FROM_CART:
      const currentItem = state.find((item) => item.id === payload.id);
      if (currentItem.cartQuantity > 1) {
        return copiedState.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity - 1,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        return copiedState.filter((item) => item.id !== payload.id);
      }
    case DELETE_ITEM:
      return copiedState.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
export default cartReducer;
** Header.js **
import { useSelector } from "react-redux";
export default function Header({ setIsCartPage }) {
  const carts = useSelector((state) => state.carts);
  const cartItem = carts.reduce(
    (totalItem, item) => item.cartQuantity + totalItem,
    0
  );
  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a onClick={() => setIsCartPage(false)} href="#">
            <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
          </a>
          <div className="flex gap-4">
            <a
              onClick={() => setIsCartPage(false)}
              href="#"
              className="navHome"
              id="lws-home"
            >
              Home
            </a>
            <a
              onClick={() => setIsCartPage(true)}
              href="#"
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cartItem}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
** Homepage.js **
import { useSelector } from "react-redux";
import InputForm from "./productsPage/InputForm";
import Product from "./productsPage/Product";
export default function Homepage() {
  const products = useSelector((state) => state.products);
  return (
    <>
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {products.length >= 1
            ? products.map((item) => <Product key={item.id} product={item} />)
            : "No product found"}
        </div>
        <InputForm />
      </div>
    </>
  );
}
** InputForm.js **
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/product/actions";
export default function InputForm() {
  const [input, setInput] = useState({
    name: "",
    category: "",
    imgUrl: "",
    price: "",
    quantity: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(input));
    setInput({
      name: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    });
  };
  const inputHandler = (fieldName, e) => {
    if (fieldName === "price" || fieldName === "quantity") {
      setInput({ ...input, [fieldName]: Number(e.target.value) });
    } else {
      setInput({ ...input, [fieldName]: e.target.value });
    }
  };
  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={submitHandler}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              value={input?.name}
              onChange={(e) => inputHandler("name", e)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              value={input?.category}
              onChange={(e) => inputHandler("category", e)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              value={input?.imgUrl}
              onChange={(e) => inputHandler("imgUrl", e)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                value={input?.price}
                onChange={(e) => inputHandler("price", e)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                value={input?.quantity}
                onChange={(e) => inputHandler("quantity", e)}
                required
              />
            </div>
          </div>
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
** Product.js **
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cart/actions";
export default function Product({ product }) {
  const dispatch = useDispatch();
  const addToCatHandler = () => {
    dispatch(addCart(product));
  };
  const { name, category, imgUrl, price, quantity } = product;
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt={name} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={product.quantity <= 0}
          onClick={addToCatHandler}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
** CartItem.js **
import { useDispatch } from "react-redux";
import { addCart, deleteCart, removeCart } from "./../../redux/cart/actions";
export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const { cartQuantity, name, imgUrl, price, category } = product;
  const total = price * cartQuantity;
  const addToCartHandler = () => {
    dispatch(addCart(product));
  };
  const removeCartHandler = () => {
    dispatch(removeCart(product));
  };
  const deleteHandler = () => {
    dispatch(deleteCart(product));
  };
  return (
    <>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          <img className="lws-cartImage" src={imgUrl} alt="product" />
          <div className="space-y-2">
            <h4 className="lws-cartName">{name}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={addToCartHandler}
              className="lws-incrementQuantity"
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{cartQuantity}</span>
            <button
              onClick={removeCartHandler}
              className="lws-decrementQuantity"
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{total}</span>
          </p>
        </div>
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button onClick={deleteHandler} className="lws-removeFromCart">
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
** BillSection.js **
import { useSelector } from "react-redux";
export default function BillSection() {
  const carts = useSelector((state) => state.carts);
  const total = carts.reduce(
    (total, item) => item.price * item.cartQuantity + total,
    0
  );
  return (
    <>
      <div className="billDetailsCard">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span className="lws-subtotal">{total}</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>
              BDT <span className="lws-discount">0</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>VAT</p>
            <p>
              BDT <span className="vat">0</span>
            </p>
          </div>
          <div className="flex items-center justify-between pb-4">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">
              BDT <span className="lws-total">{total}</span>
            </p>
          </div>
          <button className="placeOrderbtn">place order</button>
        </div>
      </div>
    </>
  );
}

