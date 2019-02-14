import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0}

// 第一引数のstateはデフォルト状態では値を持っていないのでinitialStateを初期値として渡す
export default (state = initialState, action) => {
  // 受け取ったactionのタイプに応じて状態を変更して結果をreturnで返していく
  switch (action.type) { // actionのtypeを取得。switch文で分岐
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
  } 
}