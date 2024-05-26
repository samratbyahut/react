import { useState } from 'react'

const Color = () => {
  const [color, setColor] = useState("#ff0000");
  const divArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function colorChanger(e){
    let divHasColor = e.target.style.backgroundColor;
    if (divHasColor) {
      e.target.style.removeProperty('background');;
    } else {
      e.target.style.backgroundColor = color;
    }
  }
  return (
    <>
      <div className='parentDiv'>
        {
          divArray.map((v) => {
            return <div className='childDiv' onClick={(e) => {colorChanger(e)}}></div>
          })
        }
      </div>
      <input type='color' onChange={(e) => setColor(e.target.value)} />
    </>
  )
}

export default Color