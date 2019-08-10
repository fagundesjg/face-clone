import Immutable from "seamless-immutable";

/*
    Types
*/
export const Types = {
  ADD: "posts/ADD",
  REMOVE: "posts/REMOVE"
};

/*
    Reducers
*/
const INITIAL_STATE = Immutable({
  id: 0,
  data: []
});

export default function Posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        data: [{ id: state.id, text: action.payload.post }, ...state.data],
        id: state.id + 1
      };
    case Types.REMOVE:
      return {
        data: state.data.filter(post => post.id !== action.payload.id),
        id: state.id
      };
    default:
      return state;
  }
}

/*
    Actions
*/

export const Creators = {
  addPost: post => ({
    type: Types.ADD,
    payload: { post }
  }),
  removePost: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
};
