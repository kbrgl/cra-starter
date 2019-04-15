export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = (n = 1) => ({
  type: INCREMENT,
  by: n,
})

export const decrement = (n = 1) => ({
  type: DECREMENT,
  by: -n,
})
