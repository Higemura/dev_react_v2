

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


// returnを使う場合
// export const increment = () => {
//   return {
//     type: INCREMENT
//   }
// }


// return　短縮記述法
export const increment = () => ({
  type: INCREMENT
})



export const decrement = () => ({
  type: DECREMENT
})

