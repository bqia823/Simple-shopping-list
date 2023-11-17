import React from 'react';
import { useState } from 'react';

const Content = () => {
    const[name, setName] = useState('Dave');
    const[count, setCount] = useState(0);

    const handleNameChange = () => {
        const name = ['Bob', 'Daved', 'Kevin'];
        const int = Math.floor(Math.random()*3);
        return name[int];
      }
      
      const handleClick = () => {
        setCount(count + 1);
      }

      const handleClick2 = (name) => {
        console.log(`${name} is Clicked!`);
      }

      const handleClick3 = (e) => {
        console.log(e);
      }

  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}> Change name </button>
      <button onClick={() => handleClick2('Dave')}> Click it </button>
      <button onClick={(e) => handleClick3(e)}> Click it </button>


    </main>
  );
}

export default Content;
