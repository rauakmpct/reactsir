const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};
const userSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};
const userError = (error) => {
  return {
    type: USER_ERROR,
    payload: error,
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "USER_SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case "USER_ERROR":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};


//API Call
const fetchUser = () => {
  return function (dispatch) {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      })

      .then((response) => {
        // response.data
        const users = response.data.map((user) => user.name);
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(userError(error.message));
      });
  }
}



const Store = createStore(reducer, applyMiddleware(thunkMiddleware))
Store.subscribe(() => {
  console.log('updateStateValue', Store.getState())
})

Store.dispatch(fetchUser())