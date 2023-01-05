//*** Built-in Hooks ***
/*
1. What is useState() hook in reactjs?
useState is a hook in React that adds state to functional components. It is a way to manage state in a functional component, rather than using a class component.

To use useState, you need to import it from the react library. Then, you can call it inside your functional component, like this:

Copy code
import { useState } from 'react';

function MyComponent() {
  const [state, setState] = useState(initialState);
  // ...
}
The useState hook returns an array with two elements: the current state, and a function that updates the state. The first time you call useState, the initial state is returned. You can use the returned function to update the state, like this:

Copy code
setState(newState);
The state can be of any type, such as a string, a number, an object, or an array.

Here is an example of using useState to manage a counter in a functional component:

Copy code
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
In this example, the initial state is 0, and the setCount function is used to update the state when the button is clicked. Each time the button is clicked, the count value is incremented by 1.
*/


/*
1. What is the use of useEffect() hook in reactjs?
useEffect is a hook in React that allows you to perform side effects in function components. It is a way to handle lifecycle events and other logic that would typically go in a class component's lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount.

To use useEffect, you need to import it from the react library. Then, you can call it inside your functional component, like this:

Copy code
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Perform side effects here
  });
  // ...
}
The useEffect hook takes a function as an argument, which is called the "effect function." The effect function is executed after the component renders, and any time the component's dependencies change. The dependencies are values that are used inside the effect function and passed as an array as the second argument to useEffect. If the array is empty, the effect function will only be called once, after the initial render.

Here is an example of using useEffect to fetch data from an API and update the component's state:

Copy code
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-api.com/data');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
In this example, the effect function uses the fetch function to retrieve data from an API, and then updates the component's state with the data. The effect function is only called once, after the initial render, because the dependencies array is empty.

You can also use useEffect to perform cleanup tasks, such as canceling a network request or removing an event listener. To do this, you can return a function from the effect function, like this:

Copy code
useEffect(() => {
  const subscription = someEventEmitter.addListener(eventName, handler);
  return () => {
    subscription.remove();
  };
});
The function returned from the effect function is called a "cleanup function," and it is executed before the effect function is called again or the component is unmounted.
*/




/*
1. What the use of useContext() hook in reactjs?
useContext is a hook in React that allows you to access the context of a parent component from a child component. Context is a way to pass data through the component tree without having to pass props down manually at every level.

To use useContext, you need to import it from the react library. Then, you can call it inside your functional component, like this:

Copy code
import { useContext } from 'react';

function MyComponent() {
  const context = useContext(MyContext);
  // ...
}
The useContext hook takes a context object as an argument, and returns the current value of that context. The context object is created using the React.createContext function, which takes an initial value as an argument.

Here is an example of using useContext to pass a theme down through the component tree:

Copy code
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function MyThemeProvider(props) {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }}>
      //....
    </div>
  );
}
In this example, the MyThemeProvider component provides a context value for the theme, which is passed down through the component tree to the MyComponent component. The MyComponent component uses the useContext hook to access the theme value, and uses it to set the background color of the div element.
*/



/*
1. What is the use of useRef() hook in reactjs?
useRef is a hook in React that allows you to create a mutable reference to a value. It is often used to store references to DOM elements, or to create a reference to a value that doesn't change.

To use useRef, you need to import it from the react library. Then, you can call it inside your functional component, like this:

Copy code
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef(initialValue);
  // ...
}
The useRef hook returns a mutable ref object, whose .current property is initialized to the value passed as an argument. You can use the .current property to store a reference to a value, like this:

Copy code
ref.current = value;
The ref object is a plain JavaScript object, and it persists between renders. This means that the value stored in the .current property will not change unless you update it explicitly.

Here is an example of using useRef to store a reference to a DOM element:

Copy code
import { useRef } from 'react';

function MyComponent() {
  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
In this example, the inputEl ref is used to store a reference to the input element. The focusInput function uses the .current property to focus the input element when the button is clicked.
*/



/*
1. What is the use of useReducer() hook in reactjs?
useReducer is a hook in React that allows you to manage state in a functional component using a reducer function. It is similar to the reduce function in JavaScript, and it is often used as an alternative to the useState hook when the state management becomes more complex.

To use useReducer, you need to import it from the react library. Then, you can call it inside your functional component, like this:

Copy code
import { useReducer } from 'react';

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // ...
}
The useReducer hook takes a reducer function and an initial state as arguments, and returns an array with two elements: the current state, and a dispatch function. The reducer function is a pure function that takes the current state and an action, and returns the new state. The dispatch function is used to dispatch actions to the reducer, like this:

Copy code
dispatch({ type: 'INCREMENT' });
Here is an example of using useReducer to manage a counter in a functional component:

Copy code
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
    </div>
  );
}
In this example, the reducer function handles two actions: INCREMENT and DECREMENT. The Counter component uses the dispatch function to dispatch these actions when the buttons are clicked. The reducer function updates the state accordingly, and the new state is passed down to the component.
*/



/*
*** useMemo()***
1. What is useMemo() hook?
The useMemo hook is a way to optimize the performance of a function in a React application. It takes a function as an argument and an array of dependencies, and it returns a memoized version of the function. The memoized version of the function will only be recomputed if one of the dependencies has changed.

In the code you provided, the useMemo hook is being used to create a custom theme using the createTheme function from Material-UI. The theme is created by calling the themeSettings function and passing it the mode variable as an argument. The mode variable is included in the array of dependencies for the useMemo hook, so the theme will only be recomputed if the value of mode changes.

Here's a more detailed breakdown of what's happening in the code:

The useMemo hook is called with a function as the first argument and an array of dependencies as the second argument.
The function passed to useMemo calls the createTheme function from Material-UI and passes it the result of calling the themeSettings function with the mode variable as an argument.
The useMemo hook returns a memoized version of the theme created by the createTheme function.
The memoized theme is only recomputed if the value of mode changes.
Overall, this code is using the useMemo hook to optimize the performance of the theme creation process by only recomputing the theme when necessary.
*/

/*
2. What is memoized version of useMemo() hook in react app?
In computer science, memoization is a technique for optimizing the performance of a function by caching its results. When a memoized function is called with the same arguments as a previous call, it can return the cached result instead of computing the result again. This can significantly improve the performance of a function, particularly if it is computationally expensive or if it is called frequently with the same arguments.

The useMemo hook in React is a way to use memoization to optimize the performance of functional components. When you call useMemo with a function and an array of dependencies, it returns a memoized version of the function. This means that the function will only be recomputed if one of the dependencies has changed.

For example, consider the following code:

Copy code
const expensiveFunction = (arg1, arg2) => {
  // Expensive computation here...
  return result;
}

const memoizedFunction = useMemo(() => expensiveFunction, [arg1, arg2]);
In this example, the memoizedFunction is a memoized version of the expensiveFunction. When memoizedFunction is called, it will check the values of arg1 and arg2 to see if they have changed since the last time it was called. If they have not changed, it will return the cached result from the previous call. If they have changed, it will call the expensiveFunction and cache the result for future calls.

This can help improve the performance of a React application by avoiding unnecessary computations.
*/



//*** Third Party Hooks ***
/*
1. What is the use of useRouter() hook in reactjs?
The useRouter hook is not a built-in hook in React. It is a custom hook that is often used in applications built with the Next.js framework, which is a framework for building server-rendered React applications.

The useRouter hook allows you to access the router object in a functional component. The router object contains information about the current URL, such as the pathname, query string, and params. It also provides methods for navigating to other routes, such as push, replace, and prefetch.

To use the useRouter hook, you need to import it from the next/router library, like this:

Copy code
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  // ...
}
Here is an example of using the useRouter hook to access the current URL and navigate to a different route:

Copy code
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const { pathname, query } = router;

  const handleClick = () => {
    router.push({
      pathname: '/other-page',
      query: { id: 123 }
    });
  };

  return (
    <div>
      <p>Current path: {pathname}</p>
      <button onClick={handleClick}>Go to other page</button>
    </div>
  );
}
In this example, the MyComponent component uses the useRouter hook to access the current pathname and query values from the router object. It also uses the router.push method to navigate to a different route when the button is clicked.
*/


/*
1. What is the use of useForm() hook in reactjs?
The useForm hook is a custom hook that is often used to manage form state in a functional component. It allows you to handle form input, validation, and submission in a simple and declarative way.

To use the useForm hook, you need to define it yourself or import it from a library. Here is an example of how you can define the useForm hook yourself:

Copy code
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Submit the form here
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
}
The useForm hook takes an initial values object as an argument, and returns an object with three properties: values, handleChange, and handleSubmit. The values property contains the current form values, the handleChange function is used to handle input changes, and the handleSubmit function is used to handle form submission.

Here is an example of how you can use the useForm hook in a functional component:

Copy code
import { useForm } from './useForm';

function MyForm() {
  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    password: ''
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
In this example, the MyForm component uses the useForm hook to manage the form state and handle input changes and form submission. The values object is used to set the values of the input elements, and the handleChange function is used to update the values when the inputs change. The handleSubmit function is used to handle the form submission.
*/


/*
1. What is the use of useFetch() hook in reactjs?
The useFetch hook is a custom hook that allows you to perform HTTP requests in a React component. It is a hook that manages the state of a fetch request, including the loading state, error state, and the data that is returned from the request.

Here is an example of how you might use the useFetch hook to make a GET request to an API endpoint in a React component:

Copy code
import { useFetch } from 'some-library-that-provides-useFetch';

function MyComponent() {
  const { data, error, loading } = useFetch('https://my-api.com/endpoint');

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  return null;
}
In this example, the useFetch hook is called with the URL of the API endpoint as an argument. The hook returns an object with three properties: data, error, and loading. The component can then use these properties to render the appropriate UI based on the state of the fetch request. If the request is still in progress, the component will render a "Loading" message. If there was an error, it will render an error message. If the request was successful and the data is available, it will render the data.
*/


/*
1. What is the use of the useDebounce() hook in reactjs?
The useDebounce hook is a custom hook that allows you to debounce a value in a React component. Debouncing is a technique that can be used to reduce the frequency of a function being called by grouping multiple calls into a single call. This can be useful in cases where you want to limit the number of times a function is called, such as when making an API call or updating the UI.

Here is an example of how you might use the useDebounce hook to debounce a search query in a React component:

Copy code
import { useDebounce } from 'some-library-that-provides-useDebounce';

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      // Make API call with debounced search query
    }
  }, [debouncedSearchQuery]);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
}
In this example, the useDebounce hook is called with the searchQuery state value and a debounce time of 500 milliseconds. The hook returns a debounced version of the searchQuery value, which is stored in the debouncedSearchQuery variable. The component uses an effect to make an API call with the debounced search query whenever the debounced search query changes. This ensures that the API call is not made for every keystroke, but rather after a short delay after the user stops typing.
*/



/*
1. What is the use of the useThrottle() hook in reactjs?
The useThrottle hook is a custom hook that allows you to throttle a value in a React component. Throttling is a technique that can be used to limit the number of times a function is called by spacing out the calls over a certain period of time. This can be useful in cases where you want to limit the frequency of a function being called, such as when making an API call or updating the UI.

Here is an example of how you might use the useThrottle hook to throttle a search query in a React component:

Copy code
import { useThrottle } from 'some-library-that-provides-useThrottle';

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const throttledSearchQuery = useThrottle(searchQuery, 500);

  useEffect(() => {
    if (throttledSearchQuery) {
      // Make API call with throttled search query
    }
  }, [throttledSearchQuery]);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
}
In this example, the useThrottle hook is called with the searchQuery state value and a throttle time of 500 milliseconds. The hook returns a throttled version of the searchQuery value, which is stored in the throttledSearchQuery variable. The component uses an effect to make an API call with the throttled search query whenever the throttled search query changes. This ensures that the API call is not made for every keystroke, but rather at a fixed interval of 500 milliseconds.
*/



/*
1. What is the use of the useInterval() hook in reactjs?
The useInterval hook is a custom hook that allows you to run a function at a specified interval in a React component. It is a hook that manages the state of an interval, including the start and stop of the interval, and the function that is called at each interval.

Here is an example of how you might use the useInterval hook to create an interval that updates the date and time every second in a React component:

Copy code
import { useInterval } from 'some-library-that-provides-useInterval';

function MyComponent() {
  const [time, setTime] = useState(new Date());

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return <p>{time.toString()}</p>;
}
In this example, the useInterval hook is called with a function that updates the time state value and an interval time of 1000 milliseconds (1 second). The hook starts the interval and calls the function at each interval. The component renders the current time, which is updated every second by the interval.

The useInterval hook can be useful for creating animations, polling for data, or any other use case where you want to run a function at a regular interval.
*/
const pathname = "deshboard"
console.log(pathname.substring(0,3)); // des
console.log(pathname.substring(1)); // eshboard(0 index is not included but the rest will be included) 



/*
1. What is the use of the useKeyPress() hook in reactjs?
The useKeyPress hook is a custom hook that allows you to detect when a specific key is pressed in a React component. It is a hook that manages the state of a key press, including whether a key is currently being pressed and the key that is being pressed.

Here is an example of how you might use the useKeyPress hook to detect when the space bar is pressed in a React component:

Copy code
import { useKeyPress } from 'some-library-that-provides-useKeyPress';

function MyComponent() {
  const spacePressed = useKeyPress(' ');

  return <p>{spacePressed ? 'Space bar is pressed' : 'Space bar is not pressed'}</p>;
}
In this example, the useKeyPress hook is called with the key that we want to detect, in this case the space bar. The hook returns a boolean value indicating whether the key is currently being pressed. The component renders a message indicating the state of the key press.

The useKeyPress hook can be useful for creating keyboard shortcuts, triggering actions based on key presses, or any other use case where you want to detect when a specific key is pressed.
*/



/*
There are many more third-party hooks available, and new ones are being created all the time. I recommend searching online or checking out the react-hooks-library npm package, which contains a collection of many useful hooks.
*/
