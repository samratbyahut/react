import { useState } from 'react'
const Count = () => {
  const [count, setCount] = useState(0)
  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={() => add()}>+</button>
      <h1>{count}</h1>
      <button onClick={() => sub()}>-</button>
    </>
  )
}

export default Count