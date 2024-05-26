import { useRef, useState } from 'react'
const BgChange = () => {
  const data = useRef();
  const [color, setColor] = useState();
  return (
    <>
      <div style={{background:color, height:"50px"}}>
        <input type="text" ref={data} />
        <button onClick={() => setColor(data.current.value)}>Submit</button>
      </div>

    </>
  )
}

export default BgChange