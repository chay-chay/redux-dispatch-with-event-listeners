// add code snippets from README

let state;
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state, action);
  render(); // to update state
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
} // Use the render function to display our state.

dispatch({type: '@@INIT'})

let button = document.getElementById('button');

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
}) 



// let state = {count: 0}

// function reducer(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1};
//     default:
//       return state;
//   }
// } 

// function dispatch(action){
//     state = reducer(state, action);
//   } // to update state

//   function render(){
//     let container = document.getElementById('container');
//     container.textContent = state.count;
//   } // Use the render function to display our state.

//   dispatch({type: '@@INIT'}) 

//   let button = document.getElementById('button');

// button.addEventListener('click', () => {
//   dispatch({type: 'INCREASE_COUNT'})
// }) 