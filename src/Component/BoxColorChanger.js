import { useState } from 'react'
const BoxColorChanger = () => {
  const [label, setLabel] = useState(false);
  return (
    <>
      <button type="button" onClick={() => {setLabel(!label)}}>{label?"Login":"logout"}</button>
    </>
  )
}

export default BoxColorChanger