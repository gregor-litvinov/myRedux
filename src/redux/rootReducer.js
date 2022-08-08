import { INCREMENT, ASYNC_INCRIMENT } from "./types"

export function rootReducer(state, action) {
if (action.type === INCREMENT) {
return state + 1
} else if (action.type === 'DECREMENT') {
  return state - 1
} else if (action.type === ASYNC_INCRIMENT) {
  return state + 5
}


  return state
}