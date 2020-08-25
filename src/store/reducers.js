import { INCREMENT, DECREMENT } from './actions'

const initialState = {
  counter: 0,
}

function app(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      }
    case DECREMENT:
      return {
        counter: state.counter - 1 < 0 ? 0 : state.counter - 1,
      }
    default:
      return state
  }
}

export default app
