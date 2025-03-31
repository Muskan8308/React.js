// Importing statement
const redux = require("redux");

const INITIAL_VAL = {
    counter : 0
}

// Reducer function
const reducer = (store = INITIAL_VAL, action)=> {
    let newStore = store;

    if(action.type === "INCREMENT")
        newStore = {counter : store.counter + 1}
    else if(action.type === "DECREMENT") 
        newStore = {counter : store.counter - 1}
    else if(action.type === "ADDITION")
        newStore = {counter : store.counter + action.payload.num}
    else if(action.type === "MULTI")
        newStore = {counter : store.counter * action.payload.num}
    return newStore;
}

// Creating store - createStore was deprecated since new ways are established in new versions.
const store = redux.createStore(reducer);

// creating subscriber - subscription is for view and gets the updates of the state
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

// joining subscription
store.subscribe(subscriber);

// Dispatching the action - to update the values or state (as we can't directly update the store, we have to dispatch the actions).
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
store.dispatch({type : "ADDITION", payload : {num : 5}});
store.dispatch({type : "MULTI", payload : {num : 10}});
store.dispatch({type : "INCREMENT"});



