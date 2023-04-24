const redux = require('redux') 
const counterReducer = (state = {counter:0}, action)=>{
   if(action.type === 'increment'){
    return{
        counter: state.counter+1
    };
}
    if(action.type === 'decrement'){
        return{
            counter: state.counter -1
        }
    }
};

const store = redux.createStore(counterReducer);
// we have not dispatched any action so we don't see any output here
// we need to initialise the value of state
console.log(store.getState()); // initial state 1
const counterSubscriber =()=>{
    const latestState =store.getState();
    console.log(latestState,"line14");
}
store.subscribe(counterSubscriber);
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})