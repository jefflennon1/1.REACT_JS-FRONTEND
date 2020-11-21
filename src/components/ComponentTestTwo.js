import React, { useState} from 'react';

function CompoentTesttwo(){
  const [numbers, addNumber ]  = useState([3]);
    function handleAddNumber(){
      
      // number.push(number + 1);
      addNumber([... numbers, `${Date.now()}`])
      return console.log(numbers)
    }
  return (
    <>
      <div onClick={handleAddNumber}>
        <h1>
        { numbers.map(number => <div key={number}>{number}</div>) }
        </h1>
      </div>
    </>
  )
}

export default CompoentTesttwo;