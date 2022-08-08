import {ASYNC_INCRIMENT, INCREMENT} from './types'

export function increment() {
return {
type: INCREMENT
}
}

export function asyncIncrement() {
  return function (dispatch) {
    setTimeout(() => {
dispatch({type: ASYNC_INCRIMENT})
    }, 2000)
  }
}