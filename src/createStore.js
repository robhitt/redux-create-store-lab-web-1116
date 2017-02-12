export default function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state,action)
    render()
  }

  function getState(){
    return state;
  }

  dispatch({type: '@@init'})

  return {dispatch: dispatch, getState: getState}
}



  function render(){
    let container = document.getElementById('container')
    container.textContent = 'hi'
  }

// solution
// export default function createStore(reducer){
// }

// function candyReducer(state=[], action){
//   switch (action.type) {
//     case 'ADD_CANDY':
//       return [...state, action.candy];
//     default:
//       return state;
//   }
// }
//
// export default candyReducer;
