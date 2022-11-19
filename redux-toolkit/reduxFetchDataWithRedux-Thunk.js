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

store.dispatch(fetchData());
