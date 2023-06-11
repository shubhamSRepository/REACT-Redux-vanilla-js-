const redux = require("redux");


//ACTIONS
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle ToDo";


// ACTION CREATOR
const addToDo = (text) => ({ text: text, type: ADD_TODO });
const toggleToDo = (index) => ({ index: index, type: TOGGLE_TODO });

// INITIAL STATE
const initialState = {
    todos: []
}

//REDUCERS
function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((task, i) => {
                    if (i === action.index) {
                        {
                            task.completed = !task.completed;
                        }
                    }
                    return task;
                })
            }

        default:
            return state;
    }

}

//Creating Store
const store = redux.createStore(toDoReducer);

//Dispatch Actions
store.dispatch(addToDo("Gym at 6"));
store.dispatch(addToDo("Tution at 8"));
store.dispatch(toggleToDo(1));
store.dispatch(addToDo("party at 11"));

//Read data from store
console.log(store.getState());
console.log(store.getState().todos);

