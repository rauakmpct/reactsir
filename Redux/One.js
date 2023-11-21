const { redux, createStore } = require('redux')

const initialState = {
    numberOfBooks: 100,
    numberOfLaptops: 50
}

// Action Create 

function buyBook() {
    return {
        type: 'Buy_BOOK',
        info: 'My_FirstRedux'
    }
}

// Reducer

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Buy_BOOK':
            return {
                ...state,
                a: state.numberOfBooks - 1
            }
        default:
            return state
    }
}

// Store Create

const Store = createStore(Reducer)
// console.log(Store)
console.log('initialState',Store.getState())
Store.subscribe(()=>{
    console.log('updateStateValue',Store.getState())
})
Store.dispatch(buyBook())  // action call from dispatch