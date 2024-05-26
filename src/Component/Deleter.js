import { useState } from 'react';
import { MdDelete } from "react-icons/md";

const Deleter = () => {
  const [nameArr, setNameArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  function deleteVal(key) {
    const newArr = nameArr.filter((v, k) => {
      return k !== key;
    });
    console.log(newArr);
    setNameArr(newArr);
  }
  return (
    <ul>
      {
        nameArr.map((v, k) => {
          return <li key={k} onClick={()=>{deleteVal(k)}}><MdDelete />{v}</li>
        })
      }
    </ul>
  )
}

export default Deleter