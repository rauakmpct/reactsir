const { redux, createStore,combineReducers } = require('redux')

const initialStateBooks = {
    numberOfBooks: 100,
    
  };
  const initialStatePens = {
      
      numberOfPens: 50,
  };
  //action creators
  function BuyBook() {
    return {
      
      type: "Buy_Book",
      payload: "My first redux",
    };
  }
  function BuyPen() {
    return {
      
      type: "Buy_Pen",
      payload: "My first redux",
    };
  }
  
  const BookReducer = (state = initialStateBooks, action) => {
    switch (action.type) {
      case "Buy_Book":
        return {
          ...state,
          numberOfBooks: state.numberOfBooks - 1,
        };
      
      default:
        return state;
    }
  };
  const PenReducer = (state = initialStatePens, action) => {
      switch (action.type) {
        
        case "Buy_Pen":
          return {
            ...state,
            numberOfPens: state.numberOfPens - 2,
          };
        default:
          return state;
      }
  };
  const reducer = combineReducers({
    books:BookReducer,
    pens:PenReducer,
  })
  const Store = createStore(reducer)
// console.log(Store)
console.log('initialState', Store.getState())
Store.subscribe(() => {
    console.log('updateStateValue', Store.getState())
})
Store.dispatch(BuyBook())
Store.dispatch(BuyPen())