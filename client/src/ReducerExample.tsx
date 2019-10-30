import React, { useReducer } from 'react';

type Actions = 
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; idx: number }

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "ADD" :
      return [...state, { text: action.text, complete: false}];
    case "REMOVE" :
      return state.filter((_, i) => action.idx != i);
    default :
      return state;
  };
};

export const ReducerExample: React.FC = () => {
  const [ todos, dispatch ] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "ADD", text: "..."})
        }}
      >
        +
      </button>
    </div>
  )
};